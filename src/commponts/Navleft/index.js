
import React, { Component } from 'react';
import menuConfig from './../../config/menuConfig'
import { Menu } from 'antd';
import './index.less'
import MenuItem from 'antd/lib/menu/MenuItem';
const SubMenu = Menu.SubMenu;


class Navleft extends Component {

    componentWillMount(){
        // 初始化加载
       const menuTreeNode =  this.renderMenu(menuConfig)
        this.setState({
            menuTreeNode: menuTreeNode
        })

    }
    // 菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
               return (
                   <SubMenu title={<span>{item.title}</span>} key={item.key}>
                       {this.renderMenu(item.children)}
                   </SubMenu>
               )
            }

            return <MenuItem  title={item.title} key={item.key}> 
            {item.title}
            </MenuItem>
        })

    }


    render() {
        return (
            <div>
                <div className='logo'>
                    <img  src="/assets/logo-ant.svg" alt="logo"/>
                    <h1>新零售管理系统</h1>
                </div>

                <Menu theme="dark">
                        {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default Navleft;