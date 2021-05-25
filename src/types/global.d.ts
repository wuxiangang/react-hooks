import { MouseEvent } from 'react'

export type NavigationLinkOpt = {
    title: S
    items: any[]
}

declare global {
    type S = string
    type Int = number
    type anyObject = {
        [key: string]: any
    }
    type HandleEvent = MouseEvent<HTMLButtonElement>
}

export namespace NavigationOpt {
    type BaseItem = {
        title: S
        pathname?: S
    }

    type NavigationLinkItem = {
        title: S
        pathname?: S
        subList?: SubListItem[]
    }
    type SubListItem = {
        children: BaseItem[]
    } & BaseItem

    type NavigationLinkOpt = {
        items: NavigationLinkItem[]
    }
}