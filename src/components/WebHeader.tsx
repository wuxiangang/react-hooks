import React, { FC } from 'react'
import NavigationLink from './NavigationLink'
import '@/assets/css/header.less'

const links = [
    { 
        title: '首页', 
        subList: [{
            title: 'Group one',
            children: [{
                title: '技术文档',
                pathname: '/login'
            }]
        }] 
    },
    { 
        title: '文档', 
        subList: [{
            title: 'Group one',
            children: [{
                title: '接口文档',
                pathname: '/login'
            }]
        },{
            title: 'Group two',
            children: [{
                title: '常见问题',
                pathname: '/login'
            }]
        }]
    },
    { 
        title: '注册', 
        pathname: '/register'
    },
    { 
        title: '登录', 
        pathname: '/login'
    }
]

const WebHeader: FC = () => {
    return (
        <div className="m-g">
            <div className="m-g-in">
                <div className="u-logo">
                    <span className="f-baloo">Van</span>
                    <span className="f-baloo">Wei</span>
                </div>
                <nav className="u-nav">
                    <NavigationLink items={links} />
                </nav>
            </div>
        </div>
    )
}

export default WebHeader