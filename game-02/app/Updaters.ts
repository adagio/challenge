import { Item } from './Item';

// Define an interface for item update logic
export interface ItemUpdater {
    updateQuality(item: Item): void;
}

// Concrete implementations of the ItemUpdater interface
export class NormalItemUpdater implements ItemUpdater {
    updateQuality(item: Item) {
        this.decreaseQuality(item);
        if (item.sellIn < 0) {
            this.decreaseQuality(item);
        }
    }

    private decreaseQuality(item: Item) {
        item.quality = Math.max(0, item.quality - 1);
    }
}

export class AgedBrieUpdater implements ItemUpdater {
    updateQuality(item: Item) {
        this.increaseQuality(item);
        if (item.sellIn < 0) {
            this.increaseQuality(item);
        }
    }

    private increaseQuality(item: Item) {
        item.quality = Math.min(50, item.quality + 1);
    }
}

export class BackstagePassUpdater implements ItemUpdater {
    updateQuality(item: Item) {
        this.increaseQuality(item);

        if (item.sellIn < 11) {
            this.increaseQuality(item);
        }

        if (item.sellIn < 6) {
            this.increaseQuality(item);
        }

        if (item.sellIn < 0) {
            item.quality = 0;
        }
    }

    private increaseQuality(item: Item) {
        item.quality = Math.min(50, item.quality + 1);
    }
}

export class SulfurasUpdater implements ItemUpdater {
    updateQuality(item: Item) {
        // Sulfuras quality doesn't change
    }
}

export class ConjuredItemUpdater implements ItemUpdater {
    updateQuality(item: Item) {
        this.decreaseQuality(item, 2);
        if (item.sellIn < 0) {
            this.decreaseQuality(item, 2);
        }
    }

    private decreaseQuality(item: Item, amount: number) {
        item.quality = Math.max(0, item.quality - amount);
    }
}