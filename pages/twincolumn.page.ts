import { Page, expect } from "@playwright/test";

export class TwincolumnPage {
    readonly page: Page;

    link: string = 'http://89.189.152.235:1337/?path=/story/eos-twincolumn--default';

    leftColumn = '//*[@data-testid="TwinColumn-leftColumn"]';
    rightColumn = '//*[@data-testid="TwinColumn-rightColumn"]';
    infoIcon3 = '//*[contains(text(),"InfoIcon3")]';
    rightArrow = "//*[@data-testid='SvgArrowVRight']";
    selectedNode = "//*[contains(@class,'eos-tree-node-selected')]";

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.link);
        await expect(this.page.locator("#storybook-preview-wrapper")).toBeVisible();
    }

    async addItemToTheSummaryList(frame) {
        console.log(this.leftColumn + this.infoIcon3);
        await frame.locator(this.leftColumn + this.infoIcon3).click();
        await expect(frame.locator(this.selectedNode)).toBeVisible();

        await frame.locator(this.rightArrow).click();
    }
}