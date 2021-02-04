<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" class="input-with-select" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-table :data="userlist" style="width: 100%" stripe border>
          <el-table-column type="index"></el-table-column>
          <el-table-column prop="username" label="姓名"> </el-table-column>
          <el-table-column prop="email" label="邮箱"> </el-table-column>
          <el-table-column prop="mobile" label="电话"> </el-table-column>
          <el-table-column prop="role_name" label="角色"> </el-table-column>
          <el-table-column prop="type" label="状态">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.mg_state"> </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <!-- 编辑 -->
              <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
              <!-- 删除 -->
              <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
              <!-- 分配角色 -->
              <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
                <el-button type="warning" size="mini" icon="el-icon-setting"></el-button>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'users',

  data() {
    return {
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2
      },
      userlist: []
    }
  },

  methods: {
    async getUserList() {
      const { data: res } = await this.$http.get('users', {
        params: this.queryInfo
      })
      if (res.meta.status !== 200) this.$message.error('获取用户列表失败')
      this.userlist = res.data.users
    }
  },
  mounted() {
    this.getUserList()
  }
}
</script>

<style lang="less" scoped>
.el-table {
  margin: 20px 0;
}
</style>
