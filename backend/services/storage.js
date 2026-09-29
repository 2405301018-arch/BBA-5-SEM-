import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const STORE_PATH = path.join(__dirname, '..', 'data', 'store.json');

const INITIAL_DATA = {
  hallOfFame: [
    {
      id: "hof-1",
      title: "The pigeon incident",
      description: "A rogue pigeon flew into my living room, stared directly into my soul, and refused to leave until I negotiated with half a bagel.",
      category: "Emergency",
      chaos: "⭐ 4.9",
      tag: "Chaos",
      badgeColor: "bg-secondary-container text-on-secondary-container",
      rotate: "rotate-[0.5deg]",
      tapeRotate: "rotate-1",
      upvotes: 428,
      createdAt: "2026-09-10T14:22:00.000Z"
    },
    {
      id: "hof-2",
      title: "My GPS emotionally betrayed me",
      description: "My navigation rerouted me through an abandoned scenic overlook because it believed I needed a moment of personal reflection.",
      category: "Running Late",
      chaos: "🔥 92%",
      tag: "Chaos",
      badgeColor: "bg-primary-fixed text-on-primary-fixed",
      rotate: "rotate-[-1deg]",
      tapeRotate: "-rotate-6",
      upvotes: 312,
      createdAt: "2026-09-12T09:15:00.000Z"
    },
    {
      id: "hof-3",
      title: "I accidentally entered a different timeline",
      description: "I set three alarms, but daylight saving time occurred in an alternate universe where my phone lives.",
      category: "Work",
      chaos: "💀 100%",
      tag: "Unhinged",
      badgeColor: "bg-tertiary-container text-on-tertiary-container",
      rotate: "rotate-[1.5deg]",
      tapeRotate: "rotate-3",
      upvotes: 589,
      createdAt: "2026-09-14T11:45:00.000Z"
    },
    {
      id: "hof-4",
      title: "The neighbor's Wi-Fi funeral",
      description: "My neighbor accidentally unplugged the shared router while hosting a candlelight vigil for their indoor bonsai tree.",
      category: "Work",
      chaos: "🔥 88%",
      tag: "Specific",
      badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
      rotate: "rotate-[-0.8deg]",
      tapeRotate: "rotate-2",
      upvotes: 194,
      createdAt: "2026-09-15T08:30:00.000Z"
    }
  ],
  archive: [
    {
      id: "arch-1",
      text: "I typed out a full, thoughtful reply in my head and genuinely believed I had already sent it.",
      date: "Yesterday, 4:12 PM",
      situation: "Didn't reply",
      recipient: "Coworker",
      believability: "Suspicious",
      ref: "#EX-8412",
      createdAt: "2026-09-21T10:42:00.000Z"
    },
    {
      id: "arch-2",
      text: "A rogue pigeon flew into my living room, stared directly into my soul, and refused to leave until I negotiated with half a bagel.",
      date: "Sep 12, 2026",
      situation: "Can't make it",
      recipient: "Boss",
      believability: "Absolutely Unhinged 🤯",
      ref: "#EX-4902",
      createdAt: "2026-09-12T09:30:00.000Z"
    }
  ],
  stats: {
    totalGenerated: 142,
    totalChaosReleased: 68
  }
};

class StorageService {
  async init() {
    try {
      await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
      try {
        await fs.access(STORE_PATH);
      } catch {
        await fs.writeFile(STORE_PATH, JSON.stringify(INITIAL_DATA, null, 2), 'utf8');
      }
    } catch (err) {
      console.error('Failed to initialize storage:', err);
    }
  }

  async read() {
    await this.init();
    try {
      const data = await fs.readFile(STORE_PATH, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error('Error reading storage:', err);
      return INITIAL_DATA;
    }
  }

  async write(data) {
    try {
      await fs.writeFile(STORE_PATH, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
      console.error('Error writing storage:', err);
    }
  }

  // Hall of Fame methods
  async getHallOfFame(category = null) {
    const data = await this.read();
    if (!category) return data.hallOfFame;
    return data.hallOfFame.filter(
      item => item.category?.toLowerCase() === category.toLowerCase()
    );
  }

  async addHallOfFame(entry) {
    const data = await this.read();
    const newEntry = {
      id: `hof-${Date.now()}`,
      title: entry.title.startsWith('"') ? entry.title : `"${entry.title}"`,
      description: entry.description || `Submitted under category: ${entry.category || 'General'}.`,
      category: entry.category || 'General',
      chaos: entry.chaos || '🔥 94%',
      tag: entry.tag || 'Community Legend',
      badgeColor: entry.badgeColor || 'bg-tertiary-container text-on-tertiary-container',
      rotate: 'rotate-[-0.5deg]',
      tapeRotate: 'rotate-2',
      upvotes: 1,
      createdAt: new Date().toISOString()
    };
    data.hallOfFame.unshift(newEntry);
    await this.write(data);
    return newEntry;
  }

  // Archive methods
  async getArchive() {
    const data = await this.read();
    return data.archive;
  }

  async addArchive(entry) {
    const data = await this.read();
    const newEntry = {
      id: `arch-${Date.now()}`,
      text: entry.text,
      situation: entry.situation || "Unspecified",
      recipient: entry.recipient || "Friend",
      believability: entry.believability || "Suspicious",
      ref: entry.ref || `#EX-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }),
      createdAt: new Date().toISOString()
    };
    data.archive.unshift(newEntry);
    await this.write(data);
    return newEntry;
  }

  async deleteArchive(id) {
    const data = await this.read();
    const beforeCount = data.archive.length;
    data.archive = data.archive.filter(item => item.id !== id);
    const deleted = beforeCount !== data.archive.length;
    if (deleted) {
      await this.write(data);
    }
    return deleted;
  }

  async incrementStat(statName) {
    const data = await this.read();
    if (!data.stats) data.stats = { totalGenerated: 0, totalChaosReleased: 0 };
    data.stats[statName] = (data.stats[statName] || 0) + 1;
    await this.write(data);
    return data.stats[statName];
  }
}

export const storage = new StorageService();
