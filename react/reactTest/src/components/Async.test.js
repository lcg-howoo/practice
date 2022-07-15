import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Async from "./Async";

describe('Async component', () => {
  test('renders posts if request succeeds',  async () => {
    //arrange
    // window fetch기능을 jest mock function으로 오버라이딩함.
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id: 'p1', title: 'first post'}]
    });
    render(<Async />)
    //act

    //assert
    //findAllByRole -> g
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
})
