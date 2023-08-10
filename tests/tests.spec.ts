import { test, expect } from '@playwright/test';
import { TabsPage } from '../pages/tabs.page';
import { getCurrentTime, switchToFrame } from '../utilities/utilities';
import { TimepickerPage } from '../pages/timepicker.page';
import { TwincolumnPage } from '../pages/twincolumn.page';

test('Text on the tab is visible', async ({ page }) => {
  const tabsPage = new TabsPage(page);
  await tabsPage.goto();
  const frame = switchToFrame(page);

  await tabsPage.openTab4(frame);

  const textOnTab = await frame.getByText(tabsPage.text4);
  await expect(textOnTab !== undefined).toBeTruthy();
});

test('Current time is displayed', async ({ page }) => {
  const timepickerPage = new TimepickerPage(page);
  await timepickerPage.goto();
  const frame = switchToFrame(page);

  await timepickerPage.expandListAndClickNowButton(frame);

  const currentTime = getCurrentTime();
  const timeValueFromInput = await timepickerPage.getValueFromTimeInput(frame);

  await expect(timeValueFromInput).toEqual(currentTime);
});

test('Item is added to the summary list', async ({ page }) => {
  const twincolumnPage = new TwincolumnPage(page);
  await twincolumnPage.goto();
  const frame = switchToFrame(page);

  await twincolumnPage.addItemToTheSummaryList(frame);

  const iconInTheSummaryList = await frame.locator(twincolumnPage.rightColumn + twincolumnPage.infoIcon3);
  await expect(iconInTheSummaryList !== undefined).toBeTruthy();
});
