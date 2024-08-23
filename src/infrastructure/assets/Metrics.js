import DimensionHelper from '../helpers/DimensionHelper';

export const ZeplinConstraints = {
  screenWidth: 375,
  screenHeight: 662,
};

export const ZeplinGetHeight = height =>
  DimensionHelper.getHeight(
    Math.max((height / ZeplinConstraints.screenHeight) * 100, 0.5),
  );
export const ZeplinGetWidth = width =>
  DimensionHelper.getWidth(
    Math.max((width / ZeplinConstraints.screenWidth) * 100, 0.5),
  );
