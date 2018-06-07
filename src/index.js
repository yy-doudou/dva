import dva from 'dva';
import './reset.less';

//初始化设置
const app = dva();

//插件
app.use({});

//Model 模块加载
app.model(require('./models/app').default);

//Router 路由配置
app.router(require('./router').default);

//启动配置
app.start('#root');
