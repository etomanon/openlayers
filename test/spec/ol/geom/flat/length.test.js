import _ol_geom_flat_length_ from '../../../../../src/ol/geom/flat/length.js';


describe('ol.geom.flat.length', function() {

  describe('ol.geom.flat.length.lineString', function() {

    describe('stride = 2', function() {
      const flatCoords = [0, 0, 1, 0, 1, 1, 0, 1];
      const stride = 2;

      it('calculates the total length of a lineString', function() {
        const offset = 0;
        const end = 8;
        const expected = 3;
        const got = _ol_geom_flat_length_.lineString(flatCoords, offset, end, stride);
        expect(got).to.be(expected);
      });

      it('calculates a partwise length of a lineString (offset)', function() {
        const offset = 2;
        const end = 8;
        const expected = 2;
        const got = _ol_geom_flat_length_.lineString(flatCoords, offset, end, stride);
        expect(got).to.be(expected);
      });

      it('calculates a partwise length of a lineString (end)', function() {
        const offset = 0;
        const end = 4;
        const expected = 1;
        const got = _ol_geom_flat_length_.lineString(flatCoords, offset, end, stride);
        expect(got).to.be(expected);
      });

    });

    describe('stride = 3', function() {
      const flatCoords = [0, 0, 42, 1, 0, 42, 1, 1, 42, 0, 1, 42];
      const stride = 3;

      it('calculates the total length of a lineString', function() {
        const offset = 0;
        const end = 12;
        const expected = 3;
        const got = _ol_geom_flat_length_.lineString(flatCoords, offset, end, stride);
        expect(got).to.be(expected);
      });

      it('calculates a partwise length of a lineString (offset)', function() {
        const offset = 3;
        const end = 12;
        const expected = 2;
        const got = _ol_geom_flat_length_.lineString(flatCoords, offset, end, stride);
        expect(got).to.be(expected);
      });

      it('calculates a partwise length of a lineString (end)', function() {
        const offset = 0;
        const end = 6;
        const expected = 1;
        const got = _ol_geom_flat_length_.lineString(flatCoords, offset, end, stride);
        expect(got).to.be(expected);
      });

    });
  });

  describe('ol.geom.flat.length.linearRing', function() {

    it('calculates the total length of a simple linearRing', function() {
      const flatCoords = [0, 0, 1, 0, 1, 1, 0, 1];
      const stride = 2;
      const offset = 0;
      const end = 8;
      const expected = 4;
      const got = _ol_geom_flat_length_.linearRing(flatCoords, offset, end, stride);
      expect(got).to.be(expected);
    });

    it('calculates the total length of a figure-8 linearRing', function() {
      const flatCoords = [0, 0, 1, 0, 1, 1, 0, 1, 0, -1, -1, -1, -1, 0];
      const stride = 2;
      const offset = 0;
      const end = 14;
      const expected = 8;
      const got = _ol_geom_flat_length_.linearRing(flatCoords, offset, end, stride);
      expect(got).to.be(expected);
    });

  });

});
