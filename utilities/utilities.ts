import { Locator, Page } from "@playwright/test";

export function switchToFrame(page: Page): Locator {
    return page.frame('storybook-preview-iframe')!.locator('body');
}

export function getCurrentTime(): string {
    return new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" });
}