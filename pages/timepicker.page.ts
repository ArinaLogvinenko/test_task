import { Locator, Page, expect } from "@playwright/test";

export class TimepickerPage {
    readonly page: Page;

    link: string = 'http://89.189.152.235:1337/?path=/story/eos-timepicker--default';

    expandListButton = '//*[@data-testid="SvgArrowVDown"]';
    timeList = '//*[@data-testid="TimePickerPanel"]';
    nowButton = "//*[contains(text(),'Сейчас')]";
    timeInput = '//*[@class="eos-input"]';

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.link);
        await expect(this.page.locator("#storybook-preview-wrapper")).toBeVisible();
    }

    async expandListAndClickNowButton(frame) {
        await frame.locator(this.expandListButton).click();
        await expect(frame.locator(this.timeList)).toBeVisible();

        await frame.locator(this.nowButton).click();
    }

    async getValueFromTimeInput(frame) {
        return await frame.locator(this.timeInput).getAttribute("value");
    }
}