import {Sut} from "../../app/sut";

describe('Sut', function() {
    it("should behaviour", function() {
        var sut = new Sut();

        expect(sut.behaviour()).toBe("behaved");
    });
});