import { TradeAnalyzerPage } from './app.po';

describe('trade-analyzer App', () => {
  let page: TradeAnalyzerPage;

  beforeEach(() => {
    page = new TradeAnalyzerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
