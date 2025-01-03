import { Item } from './Item';
import { ItemUpdater, AgedBrieUpdater, BackstagePassUpdater,
    SulfurasUpdater, ConjuredItemUpdater, NormalItemUpdater
 } from './Updaters';

export class GildedRose {
    items: Array<Item>;

    constructor(items: Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (const item of this.items) {
            this.getItemUpdater(item).updateQuality(item);
            if (item.name !== 'Sulfuras, Hand of Ragnaros') {
                item.sellIn--;
            }
        }
        return this.items;
    }

    private getItemUpdater(item: Item): ItemUpdater {
        switch (item.name) {
            case 'Aged Brie':
                return new AgedBrieUpdater();
            case 'Backstage passes to a TAFKAL80ETC concert':
                return new BackstagePassUpdater();
            case 'Sulfuras, Hand of Ragnaros':
                return new SulfurasUpdater();
            case 'Conjured':
                return new ConjuredItemUpdater();
            default:
                return new NormalItemUpdater();
        }
    }
}