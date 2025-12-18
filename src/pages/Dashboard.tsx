import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  UserIcon,
  ShoppingCart01Icon,
  DollarCircleIcon,
  ArrowUp01Icon,
} from '@hugeicons/core-free-icons';

const stats = [
  {
    title: '总用户数',
    value: '12,345',
    change: '+12.5%',
    icon: UserIcon,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-950/50',
  },
  {
    title: '总订单数',
    value: '8,234',
    change: '+8.2%',
    icon: ShoppingCart01Icon,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-950/50',
  },
  {
    title: '总收入',
    value: '¥234,567',
    change: '+15.3%',
    icon: DollarCircleIcon,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-50 dark:bg-purple-950/50',
  },
  {
    title: '增长率',
    value: '23.5%',
    change: '+2.4%',
    icon: ArrowUp01Icon,
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-50 dark:bg-orange-950/50',
  },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">
          仪表盘
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          欢迎回来，这是您的数据概览
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          return (
            <Card key={stat.title} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                      {stat.change}
                    </p>
                  </div>
                  <div className={`rounded-full p-3 ${stat.bgColor}`}>
                    <HugeiconsIcon icon={stat.icon} className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>最近活动</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/50">
                    <HugeiconsIcon icon={UserIcon} className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                      新用户注册
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {i} 分钟前
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>快速操作</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <button className="flex items-center gap-3 rounded-lg border border-neutral-200 p-4 text-left transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 dark:bg-green-950/50">
                  <HugeiconsIcon icon={UserIcon} className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                    添加新用户
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    创建新的用户账户
                  </p>
                </div>
              </button>

              <button className="flex items-center gap-3 rounded-lg border border-neutral-200 p-4 text-left transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 dark:bg-purple-950/50">
                  <HugeiconsIcon icon={ShoppingCart01Icon} className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                    创建订单
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    添加新的订单记录
                  </p>
                </div>
              </button>

              <button className="flex items-center gap-3 rounded-lg border border-neutral-200 p-4 text-left transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 dark:bg-orange-950/50">
                  <HugeiconsIcon icon={ArrowUp01Icon} className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                    查看报表
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    生成数据分析报表
                  </p>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
