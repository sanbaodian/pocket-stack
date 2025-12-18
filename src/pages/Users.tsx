import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HugeiconsIcon } from '@hugeicons/react';
import { UserIcon, Mail01Icon, Calendar01Icon } from '@hugeicons/core-free-icons';

const users = [
  {
    id: 1,
    name: '张三',
    email: 'zhangsan@example.com',
    role: '管理员',
    status: 'active',
    joinDate: '2024-01-15',
  },
  {
    id: 2,
    name: '李四',
    email: 'lisi@example.com',
    role: '编辑',
    status: 'active',
    joinDate: '2024-02-20',
  },
  {
    id: 3,
    name: '王五',
    email: 'wangwu@example.com',
    role: '用户',
    status: 'inactive',
    joinDate: '2024-03-10',
  },
  {
    id: 4,
    name: '赵六',
    email: 'zhaoliu@example.com',
    role: '用户',
    status: 'active',
    joinDate: '2024-04-05',
  },
];

export function Users() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">
            用户管理
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            管理系统中的所有用户
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <HugeiconsIcon icon={UserIcon} className="mr-2 h-4 w-4" />
          添加用户
        </Button>
      </div>

      {/* Users List */}
      <Card>
        <CardHeader>
          <CardTitle>用户列表</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between rounded-lg border border-neutral-200 p-4 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    <HugeiconsIcon icon={UserIcon} className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-neutral-50">
                      {user.name}
                    </p>
                    <div className="mt-1 flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                      <span className="flex items-center gap-1">
                        <HugeiconsIcon icon={Mail01Icon} className="h-4 w-4" />
                        {user.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <HugeiconsIcon icon={Calendar01Icon} className="h-4 w-4" />
                        {user.joinDate}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={user.role === '管理员' ? 'default' : 'secondary'}>
                    {user.role}
                  </Badge>
                  <Badge
                    variant={user.status === 'active' ? 'default' : 'secondary'}
                  >
                    {user.status === 'active' ? '活跃' : '未激活'}
                  </Badge>
                  <Button variant="outline" size="sm">
                    编辑
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
