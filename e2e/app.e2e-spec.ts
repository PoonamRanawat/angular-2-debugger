import { DebuggerPage } from './app.po';

describe('debugger App', function() {
  let page: DebuggerPage;

  beforeEach(() => {
    page = new DebuggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
