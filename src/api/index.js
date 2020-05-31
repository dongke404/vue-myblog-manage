import request from './request'



const baseurl='/api'
// const baseurl = 'http://127.0.0.1:5000'

//登陆请求
export const reqLogin = (loginname, password) => request(baseurl + '/login', { loginname, password }, 'POST')
//发布文章
export const publish = (params) => request(baseurl + '/publish', params, 'POST')
// 上传图片
export const uploadImg = (formdata) => request(
  baseurl + "/uploadImg",
  formdata,
  'POST',
  { headers: { "encrypt": "multipart/form-data" } }
)
//随便说说
export const addtalk = (content) => request(baseurl + '/addtalk', { content }, 'POST')

//获取标签
export const gettags = () => request(baseurl + '/tag')

//添加标签
export const addtag = (name, icon, description, img) => request(baseurl + '/tag', { name, icon, description, img }, 'POST')

//添加iconfont
export const addiconfontUrl = (fontcss) => request(baseurl + '/fontcss', { fontcss }, 'POST')

//添加图集
export const addAlbum = (name, description, img) => request(baseurl + '/album', { name, description, img }, 'POST')

//获取图集
export const getAlbum = () => request(baseurl + '/album')

//添加图片
export const addPhoto = (album, img) => request(baseurl + '/photo', { album, img }, 'POST')

//添加资源
export const addFile = (name, category, fileurl, pwd) => request(baseurl + '/file', { name, category, fileurl, pwd }, 'POST')

//添加友链
export const addFriendlink = (params) => request(baseurl + '/friendlink', params, 'POST')

