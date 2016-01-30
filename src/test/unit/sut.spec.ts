import {Sut} from "../../app/sut";

describe('Sut', function() {
    it("should be behaved", function() {
        var sut = new Sut();

        expect(sut.behaviour()).toBe("behaved");
    });
});