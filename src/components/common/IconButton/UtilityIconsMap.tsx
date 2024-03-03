import { UtilityIcon } from '@/services/api/getHeaderData';
import { FC } from 'react';
import { CartIcon } from '@/components/common/Icons/CartIcon/CartIcon';
import { ProfileIcon } from '@/components/common/Icons/ProfileIcon/ProfileIcon';
import { SearchIcon } from '@/components/common/Icons/SearchIcon/SearchIcon';
import { PlayIcon } from '@/components/common/Icons/PlayIcon/PlayIcon';
import { PauseIcon } from '@/components/common/Icons/PauseIcon/PauseIcon';

export const utilityIconsRecord: Record<UtilityIcon, FC> = {
    [UtilityIcon.CART]: CartIcon,
    [UtilityIcon.PROFILE]: ProfileIcon,
    [UtilityIcon.SEARCH]: SearchIcon,
    [UtilityIcon.PLAY]: PlayIcon,
    [UtilityIcon.PAUSE]: PauseIcon,
};
