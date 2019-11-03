<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: 'TodoList',
    data() {
      return {
        tableData: null,
        search: ''
      }
    },
    mounted () {
    this.$ajax
      .get('http://127.0.0.1:8080/v1/todo')
      .then(response => (this.tableData = response))
    },
    methods: {
    //   handleEdit(index, row) {
        // console.log(index, row);
    //   },
    //   handleDelete(index, row) {
        // console.log(index, row);
    //   }
    },
  }
</script>