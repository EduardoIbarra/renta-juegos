import { RentaJuegosPage } from './app.po';

describe('renta-juegos App', () => {
  let page: RentaJuegosPage;

  beforeEach(() => {
    page = new RentaJuegosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
