import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { render as testRender, act, fireEvent } from '@testing-library/react';
import UserList from "../UserList";

describe("<DeleteReportHistoryModal /> test cases", () => {
    const fakeUserList = [
        {
          "id": 1,
          "name": "Djordje Andjelkovic",
          "username": "djordje",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        }
    ];

    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUserList),
        })
    );


    let container = null;
    beforeEach(() => {
        fetch.mockClear();

        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it("fetch user list", async () => {
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeUserList)
            })
        );

        // Use the asynchronous version of act to apply resolved promises
        await act(async () => {
            render(<UserList />, container);
        });

        expect(fetch).toHaveBeenCalledTimes(1);

        expect(container.textContent).toContain(fakeUserList[0].name);
        expect(container.textContent).toContain(fakeUserList[0].username);
        expect(container.textContent).toContain(fakeUserList[0].email);

        expect(container.textContent).toContain(fakeUserList[1].name);
        expect(container.textContent).toContain(fakeUserList[1].username);
        expect(container.textContent).toContain(fakeUserList[1].email);

        // remove the mock to ensure tests are completely isolated
        global.fetch.mockRestore();
    });

    it("render user list", async () => {
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeUserList)
            })
        );

        // Use the asynchronous version of act to apply resolved promises
        await act(async () => {
            render(<UserList />, container);
        });

        expect(container.textContent).toContain(fakeUserList[0].name);
        expect(container.textContent).toContain(fakeUserList[0].username);
        expect(container.textContent).toContain(fakeUserList[0].email);

        expect(container.textContent).toContain(fakeUserList[1].name);
        expect(container.textContent).toContain(fakeUserList[1].username);
        expect(container.textContent).toContain(fakeUserList[1].email);
    });

    it("trigger filter typing", async () => {
        let wrapper;
        act(() => {
            wrapper = testRender(<UserList />);
        });
        
        const { getByTestId } = wrapper;
        expect(fetch).toBeCalledTimes(1);
        const input = getByTestId('filter-input');

        jest.useFakeTimers();
        act(() => {
            fireEvent.change(input, { target: { value: 'Bret' } })
        });    
        
        expect(input).toHaveValue('Bret');
        jest.runOnlyPendingTimers();
    
        expect(fetch).toBeCalledTimes(2);

        jest.useRealTimers();
        
        // remove the mock to ensure tests are completely isolated
        global.fetch.mockRestore();
    });
});
