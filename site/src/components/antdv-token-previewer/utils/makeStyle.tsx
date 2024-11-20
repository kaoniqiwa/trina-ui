import type { CSSInterpolation } from '@kaoniqiwa/trina-ui/es/_util/cssinjs';
import { useStyleRegister } from '@kaoniqiwa/trina-ui/es/_util/cssinjs';
import { theme as antdTheme } from '@kaoniqiwa/trina-ui';
import type { GlobalToken } from '@kaoniqiwa/trina-ui/es/theme/interface';
import { mergeToken } from '@kaoniqiwa/trina-ui/es/theme/internal';
import { computed } from 'vue';
import useConfigInject from '@kaoniqiwa/trina-ui/es/config-provider/hooks/useConfigInject';

import type { UseComponentStyleResult } from '@kaoniqiwa/trina-ui/es/theme/internal';
const makeStyle = (
  path: string,
  styleFn: (token: GlobalToken & { rootCls: string }) => CSSInterpolation,
) => {
  return (): UseComponentStyleResult => {
    const { theme, token, hashId } = antdTheme.useToken();

    const { getPrefixCls } = useConfigInject('', {});

    const rootCls = getPrefixCls();

    const componentInfo = computed(() => {
      return {
        theme: theme.value,
        token: token.value,
        hashId: hashId.value,
        path: [path],
      };
    });
    return [
      useStyleRegister(componentInfo, () => {
        const mergedToken = mergeToken<GlobalToken & { rootCls: string }>(token.value, {
          rootCls: `.${rootCls}`,
        });
        const styleInterpolation = styleFn(mergedToken);

        return [styleInterpolation];
      }),
      hashId,
    ];
  };
};

export default makeStyle;
