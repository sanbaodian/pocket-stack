import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HugeiconsIcon } from '@hugeicons/react';
import { ShoppingCart01Icon } from '@hugeicons/core-free-icons';

const orders = [
  {
    id: 'ORD-001',
    customer: '张三',
    amount: '¥1,234',
    status: 'completed',
    date: '2024-12-18',
  },
  {
    id: 'ORD-002',
    customer: '李四',
    amount: '¥2,345',
    status: 'pending',
    date: '2024-12-18',
  },
  {
    id: 'ORD-003',
    customer: '王五',
    amount: '¥3,456',
    status: 'processing',
    date: '2024-12-17',
  },
];

export function Orders() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">
            订单管理
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            管理所有订单信息
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <HugeiconsIcon icon={ShoppingCart01Icon} className="mr-2 h-4 w-4" />
          创建订单
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>订单列表</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                  <th className="pb-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    订单号
                  </th>
                  <th className="pb-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    客户
                  </th>
                  <th className="pb-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    金额
                  </th>
                  <th className="pb-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    状态
                  </th>
                  <th className="pb-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    日期
                  </th>
                  <th className="pb-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-neutral-200 dark:border-neutral-800"
                  >
                    <td className="py-4 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                      {order.id}
                    </td>
                    <td className="py-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {order.customer}
                    </td>
                    <td className="py-4 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                      {order.amount}
                    </td>
                    <td className="py-4">
                      <Badge
                        variant={
                          order.status === 'completed' ? 'default' : 'secondary'
                        }
                      >
                        {order.status === 'completed'
                          ? '已完成'
                          : order.status === 'pending'
                            ? '待处理'
                            : '处理中'}
                      </Badge>
                    </td>
                    <td className="py-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {order.date}
                    </td>
                    <td className="py-4">
                      <Button variant="outline" size="sm">
                        查看
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
