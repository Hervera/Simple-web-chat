import store from "./store";

describe("store", () => {
    it("should create a store", () => {
        expect(store).toEqual(
            expect.objectContaining({
                dispatch: expect.any(Function),
                getState: expect.any(Function),
            })
        );
    });
});

