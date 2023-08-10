import { Page, expect } from "@playwright/test";

export class TabsPage {
    readonly page: Page;
    readonly

    link: string = 'http://89.189.152.235:1337/?path=/story/eos-tabs--default';
    tab4: string = 'Вкладка 4';
    text4: string = 'Текст 4';

    activeTab4Locator = "//*[contains(@class,'eos-tabs-tab-active')]//*[contains(text(), 'Вкладка 4')]";

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.link);
        await expect(this.page.locator("#storybook-preview-wrapper")).toBeVisible();
    }

    async openTab4(frame) {
        await frame.getByText(this.tab4).click();
        await expect(frame.locator(this.activeTab4Locator)).toBeVisible();
    }
}