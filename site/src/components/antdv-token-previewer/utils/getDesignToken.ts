import type { ThemeConfig } from '@kaoniqiwa/trina-ui/es/config-provider/context';
import type { GlobalToken, MapToken } from '@kaoniqiwa/trina-ui/es/theme/interface';
import defaultMap from '@kaoniqiwa/trina-ui/es/theme/themes/default';
import seed from '@kaoniqiwa/trina-ui/es/theme/themes/seed';
import formatToken from '@kaoniqiwa/trina-ui/es/theme/util/alias';

export default function getDesignToken(config: ThemeConfig = {}): GlobalToken {
  const seedToken = { ...seed, ...config.token };
  const mapFn = config.algorithm ?? defaultMap;
  const mapToken = Array.isArray(mapFn)
    ? mapFn.reduce<MapToken>((result, fn) => fn(seedToken, result), undefined as any)
    : mapFn(seedToken);
  const mergedMapToken = {
    ...mapToken,
    ...config.components,
    override: config.token ?? {},
  };
  return formatToken(mergedMapToken);
}
