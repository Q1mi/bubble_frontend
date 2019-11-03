<template>
  <el-container>
    <el-header>q1mi Gin框架实战项目</el-header>
    <el-main>
      <el-row>
        <el-col :span="16" :offset="4">
          <div class="grid-content">
            <el-divider>bubble<i class="el-icon-finished"></i></el-divider>
            <TodoList></TodoList>
          </div>
          </el-col>
      </el-row>  
    </el-main>
  </el-container>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>

