import QRCode from 'qrcode'
export default class makeQRSrcApi {
  static makeQRSrcPay (url) {
    if (!url) return
    var self = {}
    console.log(self)
    self.qrcodeUrl = ''
    QRCode.toDataURL(url, {
      version: 4
    }, function (err, resurl) {
      self.qrcodeUrl = resurl
      console.log(err)
    })
    return self.qrcodeUrl
  }
  static makeQRSrcH5 (url) {
    if (!url) return
    var self = {}
    console.log(self)
    self.qrcodeUrl = ''
    QRCode.toDataURL(url, {
      version: 6,
    }, function (err, resurl) {
      self.qrcodeUrl = resurl
      console.log(err)
    })
    return self.qrcodeUrl
  }
}
