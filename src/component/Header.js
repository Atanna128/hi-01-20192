import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';
import {
  EyeOutlined, VideoCameraAddOutlined, WarningOutlined, ProjectOutlined, FileDoneOutlined, ClusterOutlined,
  SmileOutlined, BellOutlined, InfoCircleOutlined
} from '@ant-design/icons';

import config from '../config'

const LOGO_URL = 'https://i.ibb.co/DzC39Tm/EFD-Egypt-50646-1577276120-og-1.jpg';
// const LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/0/04/Logo_EFD_induction.svg';

const { SubMenu } = Menu

class Header extends Component {

  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div id="header" className="header">
        <Row type="flex" align="middle">
          <Col span={6}>
            <Link to={`/`}>
              <div id="logo" to="/">
                <img src={LOGO_URL} alt="logo" />
                <span>ELECTRIC FAULT DETECTION</span>
              </div>
            </Link>
          </Col>
          <Col span={18}>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{ float: 'right' }}>
              {/* <Menu.Item key="mail" icon={<MailOutlined />}>
                Navigation One
              </Menu.Item>
              <Menu.Item key="app" icon={<AppstoreOutlined />}>
                Navigation Two
              </Menu.Item>
              <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="google.com" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              </Menu.Item> */}
              <SubMenu icon={<EyeOutlined />} title="Điều khiển drone">
                <Menu.Item key="setting:1">Điều khiển payload</Menu.Item>
                <Menu.Item key="setting:2">Xem danh sách drone xung quanh</Menu.Item>
                <Menu.Item key="setting:3">
                  <a href={`${config.NHOM3}/taotrinhbay.html`}>Thiết lập hành trình bay tự động</a>
                </Menu.Item>
              </SubMenu>

              <SubMenu icon={<VideoCameraAddOutlined />} title="Quản lý drone">
                <Menu.Item key="setting:4">
                  <a href={`${config.NHOM4}/flight-data`}>Quản lý dữ liệu bay</a>
                </Menu.Item>
                <Menu.Item key="setting:5">
                  <a href={`${config.NHOM3}/quanlytrinhbay.html`}>Quản lý các hành trình bay</a>
                </Menu.Item>
                <Menu.Item key="setting:6">
                  <a href={`${config.NHOM3}/thongbao.html`}>Cảnh báo rủi ro</a>
                </Menu.Item>
                <Menu.Item key="setting:7">Quản lý các drone đang hoạt động trên bản đồ</Menu.Item>
                <Menu.Item key="setting:8">Quản lý tổ đội bay</Menu.Item>
                <Menu.Item key="setting:9">Quản lý thiết bị drone và thiết bị đi kèm</Menu.Item>
              </SubMenu>

              <SubMenu icon={<WarningOutlined />} title="Phân tích nguy cơ">
                <Menu.Item key="setting:10">
                <a href={`${config.NHOM7}`}>Xem danh sách thành phần lưới điện</a>
                </Menu.Item>
                <Menu.Item key="setting:11">
                  <a href={`${config.NHOM2}`}>Xem danh sách các nguy cơ tiềm ẩn</a>
                </Menu.Item>
                <Menu.Item key="setting:12">
                  <a href={`${config.NHOM2}/addcheck`}>Gửi cảnh báo và yêu cầu kiểm tra</a>
                </Menu.Item>
                <Menu.Item>
                  <a href={`${config.NHOM6}/analysis`}>Quản lý phân tích sự cố</a>
                </Menu.Item>
              </SubMenu>

              <SubMenu icon={<ClusterOutlined />} title="Giám sát trung tâm">
                <Menu.Item key="setting:13">Quản lý thành phần lưới điện</Menu.Item>
                <Menu.Item key="setting:14">Tiếp nhận thông tin cảnh báo, báo cáo</Menu.Item>
                <Menu.Item key="setting:15">
                  <a href={`${config.NHOM2}/checklist`}>Xem danh sách toàn bộ các đợt kiểm tra</a>
                </Menu.Item>
                <Menu.Item key="setting:16">Tạo đợt kiểm tra thủ công</Menu.Item>
                <Menu.Item key="setting:17">Tạo đợt kiểm tra tự động</Menu.Item>
              </SubMenu>

              <SubMenu icon={<FileDoneOutlined />} title="Báo cáo kiểm tra">
                <Menu.Item key="setting:18">
                  <a href={`${config.NHOM5}/datatable.html`}>Xem danh sách các đợt kiểm tra</a>
                </Menu.Item>
                <Menu.Item key="setting:19">
                  <a href={`${config.NHOM5}/charts.html`}>Biểu đồ số lượng báo cáo tổng hợp</a>
                </Menu.Item>
                <Menu.Item key="setting:20">
                  <a href={`${config.NHOM5}/forms.html`}>Tạo báo cáo kết quả kiểm tra theo mẫu</a>
                </Menu.Item>
              </SubMenu>

              {/* <Link to={`/construction-list`}>Xem danh sách công trình</Link> */}
              <SubMenu icon={<ProjectOutlined />} title={<Link to={`/module`}><span>Giám sát thi công</span></Link>}>
                <Menu.Item key="setting:21">
                  <Link to={`/construction-list`}>Xem danh sách công trình</Link>
                </Menu.Item>
                {/* <Menu.Item key="setting:22">
                  <Link to={`/gantt`}>Thống kê tiến độ</Link>
                  Cái link này đáng lẽ phải dẫn tới trang của Tú
                </Menu.Item> */}
                <Menu.Item key="setting:23">
                  <Link to={`/construction-add`}>Tạo công trình</Link>
                </Menu.Item>
                <Menu.Item key="setting:24">
                  <Link to={`/choose-report`}>Tạo báo cáo kết quả tiến độ theo mẫu</Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item icon={<InfoCircleOutlined />}></Menu.Item>
              <Menu.Item icon={<BellOutlined />}></Menu.Item>
              <Menu.Item icon={<SmileOutlined />}></Menu.Item>



            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;