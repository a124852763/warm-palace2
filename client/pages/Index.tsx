import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Thermometer, 
  Smartphone, 
  Timer, 
  Users, 
  Shield,
  Star,
  QrCode,
  Apple,
  PlaySquare,
  ChevronDown
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warming-light via-background to-health-light">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-warming/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-warming to-primary rounded-xl flex items-center justify-center">
                <Thermometer className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">UKISO</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-warming transition-colors">功能特点</a>
              <a href="#benefits" className="text-muted-foreground hover:text-warming transition-colors">健康益处</a>
              <a href="#download" className="text-muted-foreground hover:text-warming transition-colors">立即下载</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-warming-light text-warming border-warming/30">
                女性健康管理专家
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                经期追踪
                <br />
                <span className="bg-gradient-to-r from-warming to-primary bg-clip-text text-transparent">
                  智能理疗
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                集经期记录、周期预测与智能暖宫腰带操控于一体的女性健康应用。通过智能硬件联动，提升经期舒适体验。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-warming hover:bg-warming/90 text-white px-8 py-3 text-lg">
                  <Smartphone className="w-5 h-5 mr-2" />
                  立即下载 APP
                </Button>
                <Button variant="outline" size="lg" className="border-warming text-warming hover:bg-warming-light px-8 py-3 text-lg">
                  了解更多
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="font-medium">4.9</span>
                  <span className="ml-1">用户评分</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-health mr-1" />
                  <span className="font-medium">50万+</span>
                  <span className="ml-1">女性用户</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-warming/10 to-health/10 rounded-3xl p-8 backdrop-blur-sm border border-white/50">
                <div className="bg-white rounded-2xl p-6 shadow-2xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc7202c91bc6a45faac49b509fb0f177d%2Feefe9aac513748289aff4ea0c815bcd2?format=webp&width=800"
                    alt="UKISO智能暖宫腰带应用界面展示"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-warming to-primary rounded-2xl rotate-12 opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-health to-warming rounded-xl rotate-45 opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* App Interface Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">
              应用界面
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              直观易用的操作界面
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              简洁明了的设计，一键操作，让智能护理变得更简单
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Period Tracking Interface */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
              <div className="bg-white rounded-2xl p-4 mb-4 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc7202c91bc6a45faac49b509fb0f177d%2Fb04eb57101864036b7d09e8f6ec1d6df?format=webp&width=800"
                  alt="Period tracking calendar interface"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground text-center">经期追踪</h3>
              <p className="text-sm text-muted-foreground text-center mt-2">周期预测与日历视图</p>
            </div>

            {/* Bluetooth Device Pairing */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
              <div className="bg-white rounded-2xl p-4 mb-4 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc7202c91bc6a45faac49b509fb0f177d%2Ff1f86578a61341069ad0d28c84cd0d7e?format=webp&width=800"
                  alt="Device search and Bluetooth pairing interface"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground text-center">设备配对</h3>
              <p className="text-sm text-muted-foreground text-center mt-2">蓝牙连接与设备管理</p>
            </div>

            {/* Device Control */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
              <div className="bg-white rounded-2xl p-4 mb-4 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc7202c91bc6a45faac49b509fb0f177d%2F648d169c64fc4311bdf529a02042b2a9?format=webp&width=800"
                  alt="Device control interface with vibration and heating settings"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground text-center">智能控制</h3>
              <p className="text-sm text-muted-foreground text-center mt-2">震动加热精确调节</p>
            </div>

            {/* User Center */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
              <div className="bg-white rounded-2xl p-4 mb-4 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc7202c91bc6a45faac49b509fb0f177d%2Ff9dab98fbb7846e4abe79980a89989c8?format=webp&width=800"
                  alt="User profile and settings interface"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground text-center">用户中心</h3>
              <p className="text-sm text-muted-foreground text-center mt-2">个人资料与设置管理</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-health-light text-health border-health/30 mb-4">
              核心功能
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              五大核心模块
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              经期健康管理与智能硬件控制完美结合，提供全方位的女性健康解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-warming/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-warming-light rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-warming" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">用户注册登录</h3>
                <p className="text-muted-foreground leading-relaxed">
                  支持邮箱登录，符合海外产品规范，界面简洁，隐私协议明确
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-health/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-health-light rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-health" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">经期记录预测</h3>
                <p className="text-muted-foreground leading-relaxed">
                  手动记录月经信息，智能预测周期，日历倒计时视图，个性化提醒设置
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">蓝牙设备配对</h3>
                <p className="text-muted-foreground leading-relaxed">
                  搜索连接流程简单，设备状态一��了然，电量显示与连接状态实时反馈
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-warming/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-warming-light rounded-xl flex items-center justify-center mb-4">
                  <Thermometer className="w-6 h-6 text-warming" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">智能设备控制</h3>
                <p className="text-muted-foreground leading-relaxed">
                  震动三档调节(Gentle/Soothing/Strong)，加热四温度选择(40-55°C)，个性化定制
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-health/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-health-light rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-health" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">用户中心设置</h3>
                <p className="text-muted-foreground leading-relaxed">
                  提醒时间设置，个人资料管理，经期信息修改，温和亲切的界面设计
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <Timer className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">硬件数据联动</h3>
                <p className="text-muted-foreground leading-relaxed">
                  经期数据与智能硬件联动，临近经期智能提醒，个性化理疗方案推荐
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-warming-light text-warming border-warming/30">
                健康益处
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                科学护理
                <br />
                守护健康
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-warming rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">缓解月经不适</h3>
                    <p className="text-muted-foreground">温热疗法有效缓解痛经，减轻经期不适感</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-health rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">促进血液循环</h3>
                    <p className="text-muted-foreground">适度加热促进局部血液循环，改善身体状况</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">调节内分泌</h3>
                    <p className="text-muted-foreground">帮助调节内分泌平衡，维护女性健康</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-health/10 to-warming/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-2xl font-bold text-warming mb-1">98%</div>
                    <div className="text-sm text-muted-foreground">用户满意度</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-2xl font-bold text-health mb-1">30天</div>
                    <div className="text-sm text-muted-foreground">见效周期</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">贴心护理</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-2xl font-bold text-warming mb-1">安全</div>
                    <div className="text-sm text-muted-foreground">医用标准</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-warming/5 to-health/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-warming-light text-warming border-warming/30 mb-4">
              产品展示
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              UKISO 智能暖宫腰带
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              精���设计，专业品质，为女性健康护理而生
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-warming/20 max-w-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-warming/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-warming" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">产品图片占位符</h3>
                  <p className="text-sm text-muted-foreground">在此处添加 UKISO 智能暖宫腰带产品图片</p>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-warming/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-warming mb-1">无线设计</div>
                  <div className="text-sm text-muted-foreground">便携舒适</div>
                </div>
                <div className="bg-health/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-health mb-1">智能控制</div>
                  <div className="text-sm text-muted-foreground">精准调节</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-primary mb-1">安全认证</div>
                  <div className="text-sm text-muted-foreground">医用标准</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">
            立即下载
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            开启您的健康之旅
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            扫描二维码或点击下载按钮，立即获取暖宫腰带APP，开始您的科学护理体验
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">iOS 下载</h3>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-32 h-32 mx-auto bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <QrCode className="w-16 h-16 text-muted-foreground" />
                </div>
                <Button className="w-full bg-black text-white hover:bg-black/90">
                  <Apple className="w-4 h-4 mr-2" />
                  App Store
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">扫码下载</h3>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-40 h-40 mx-auto bg-gradient-to-br from-warming/20 to-health/20 rounded-xl flex items-center justify-center mb-4">
                  <div className="grid grid-cols-8 gap-1">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1 h-1 rounded-sm ${Math.random() > 0.5 ? 'bg-foreground' : 'bg-transparent'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">使用手机相机扫描</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Android 下载</h3>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-32 h-32 mx-auto bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <QrCode className="w-16 h-16 text-muted-foreground" />
                </div>
                <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                  <PlaySquare className="w-4 h-4 mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-warming/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  立即体验智能暖宫护理
                </h3>
                <p className="text-muted-foreground">
                  加入50万+用户的健康选择，开启科学护理新生活
                </p>
              </div>
              <Button size="lg" className="bg-warming hover:bg-warming/90 text-white px-8 py-3">
                <Smartphone className="w-5 h-5 mr-2" />
                立即下载
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-warming to-primary rounded-xl flex items-center justify-center">
                <Thermometer className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">UKISO</span>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>© 2024 UKISO 智能暖宫腰带 App. 专注女性健康管理</p>
              <p className="mt-1">经期追踪 · 智能理疗 · 贴心陪伴</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
