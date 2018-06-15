//index.js
//获取应用实例
const app = getApp()
var imgArr = ['f1', 'f3', 'f4', 'f5', 'f6', 'n2', 't1', 't2'];
var imgIndex = 0;
Page({
  data: {
    motto: 'Hello World',
    imageSelected: [false, false],
    imageList: ['../../image/' + imgArr[imgIndex++] + '.jpg', '../../image/' + imgArr[imgIndex++] + '.jpg'],
    changeImage: false
  },
  //事件处理函数
  handleImageSelected: function (e) {
    if (imgIndex >= imgArr.length-1) {
      console.log('over');
      return ;
    }
    var t = e.currentTarget;
    var data = t.dataset;
    var num = data.num;

    if (num == 0) {
      this.setData({ 'imageSelected[0]': true});
      setTimeout(()=> {
        changeImages(this, num);
      }, 540);
    } else {
      this.setData({ 'imageSelected[1]': true });
      setTimeout(() => {
        changeImages(this, num);
      }, 540);
    }
  },
  onLoad: function () {

  }
});

function changeImages(that, num) {
  var img1 = '../../image/' + imgArr[imgIndex++] + '.jpg';
  var img2 = '../../image/' + imgArr[imgIndex++] + '.jpg';
  that.setData({'changeImage': true});
  setTimeout(()=> {
    var imageSelected = 'imageSelected[' + num + ']';
    that.setData({ imageSelected: false });
    that.setData({ 'imageList[0]': img1});
    that.setData({ 'imageList[1]': img2});
    that.setData({ 'changeImage': false });
  }, 1000);
}
