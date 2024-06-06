<template>
    <div class="blogContentCard">
      <div class="blogContentBody">
<!--              <div>-->
<!--                <el-form-item label="公告内容" prop="content">-->
<!--                  <md-editor v-model="form.content"/>-->
<!--                </el-form-item>-->
<!--              </div>-->
        <div>
          <div v-html="htmlContent"></div>
        </div>
      </div>

    </div>

</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {MdEditor} from "md-editor-v3";
import 'md-editor-v3/lib/style.css'
import MarkdownIt from "markdown-it";
import { useRoute } from 'vue-router'
const router = useRoute()
const id = ref();

onMounted(() => {
 id.value = router.query.id;
})
const form = ref({
  content: '# MyBatia-Plus\n' +
      // '# 标题\n' +
      // '\n' +
      // '----\n' +
      // '## 目录\n' +
      // '1. [目录1](#jump1)\n' +
      // '2. [目录2](#jump2)\n' +
      // '\n' +
      // '---\n' +
      // '### <p id="jump1" style="">1. 目录1</p>\n' +
      // '---\n' +
      // '### <span id="jump2">2. 目录2</span>\n' +
      '\n' +
      '## 简介\n' +
      '<img src="https://imzbf.github.io/md-editor-rt/imgs/mark_emoji.gif" alt="image" width="100%" height="auto">\n'+
      '\n' +
      '[MyBatis-Plus](https://link.zhihu.com/?target=https%3A//github.com/baomidou/mybatis-plus) （简称 MP，下文就使用简称）是一个 [MyBatis](https://link.zhihu.com/?target=https%3A//www.mybatis.org/mybatis-3/)的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。官网地址：[https://baomidou.com/](https://link.zhihu.com/?target=https%3A//baomidou.com/) 有以下特性：\n' +
      '\n' +
      '- **无侵入**：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑\n' +
      '- **损耗小**：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作\n' +
      '- **强大的 CRUD 操作**：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求\n' +
      '- **支持 Lambda 形式调用**：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错\n' +
      '- **支持主键自动生成**：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题\n' +
      '- **支持 ActiveRecord 模式**：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作\n' +
      '- **支持自定义全局通用操作**：支持全局通用方法注入（ Write once, use anywhere ）\n' +
      '- **内置代码生成器**：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用\n' +
      '- **内置分页插件**：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询\n' +
      '- **分页插件支持多种数据库**：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、Postgre、SQLServer 等多种数据库\n' +
      '- **内置性能分析插件**：可输出 SQL 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询\n' +
      '- **内置全局拦截插件**：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作\n' +
      '\n' +
      '## 项目建立\n' +
      '\n' +
      '1. 项目建立\n' +
      '    \n' +
      '    在IDEA上建立一个springboot基本项目（我使用的是Maven管理依赖包)\n' +
      '    \n' +
      '    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f5964b3c-6cf5-41e0-9861-963ab7ad7a95/4331d4cb-aefb-41ad-b986-68ff80eddb6d/Untitled.png)\n' +
      '    \n' +
      '2. 添加依赖\n' +
      '    1. pom.xml文件下添加依赖\n' +
      '        \n' +
      '        ```xml\n' +
      '        <!-- MySQL连接驱动 -->\n' +
      '        <dependency>\n' +
      '        \t<groupId>mysql</groupId>\n' +
      '          <artifactId>mysql-connector-java</artifactId>\n' +
      '          <version>8.0.19</version>\n' +
      '         </dependency>\n' +
      '        \n' +
      '        <!-- mp依赖 -->\n' +
      '        <dependency>\n' +
      '        \t<groupId>com.baomidou</groupId>\n' +
      '          <artifactId>mybatis-plus-boot-starter</artifactId>\n' +
      '          <version>3.5.2</version>\n' +
      '        </dependency>\n' +
      '        <!--lombok-->\n' +
      '        <dependency>\n' +
      '        \t <groupId>org.projectlombok</groupId>\n' +
      '           <artifactId>lombok</artifactId>\n' +
      '        </dependency>\n' +
      '        ```\n' +
      '        \n' +
      '    2. application.yml\n' +
      '        \n' +
      '        ```yaml\n' +
      '        server:\n' +
      '          port: 9080\n' +
      '        \n' +
      '        spring:\n' +
      '          datasource:\n' +
      '            driver-class-name: com.mysql.cj.jdbc.Driver\n' +
      '            url: jdbc:mysql://127.0.0.1:3306/mybatis-plus_test\n' +
      '            username: root\n' +
      '            password: 111111\n' +
      '        ```\n' +
      '        \n' +
      '3. 启动Springboot项目\n' +
      '    \n' +
      '    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f5964b3c-6cf5-41e0-9861-963ab7ad7a95/f1267b8c-2306-477f-b926-dc6346c6c32d/Untitled.png)\n' +
      '    \n' +
      '    项目启动成功\n' +
      '    \n' +
      '\n' +
      '## 示例\n' +
      '\n' +
      '1. 创建一个User\n' +
      '    \n' +
      '    ```java\n' +
      '    @Data\n' +
      '    public class User {\n' +
      '    \n' +
      '        private int id;\n' +
      '    \n' +
      '        private String username;\n' +
      '    \n' +
      '        private String sex;\n' +
      '    \n' +
      '        private int age;\n' +
      '    \n' +
      '    }\n' +
      '    ```\n' +
      '    \n' +
      '2. 创建UserMapper\n' +
      '    \n' +
      '    ```java\n' +
      '    @Mapper\n' +
      '    public interface UserMapper extends BaseMapper<User> {\n' +
      '    \n' +
      '    }\n' +
      '    ```\n' +
      '    \n' +
      '3. 添加一个测试类（只是用来测试这个Mybatis-plus的一些方法的）\n' +
      '    \n' +
      '    对于这个测试类需要再pom.xml添加一些相关依赖（如果不使用测试类的话就不需要Junit）\n' +
      '    \n' +
      '    ```xml\n' +
      '    <dependency>\n' +
      '    \t<groupId>org.springframework.boot</groupId>\n' +
      '      <artifactId>spring-boot-starter-test</artifactId>\n' +
      '      <scope>test</scope>\n' +
      '    </dependency>\n' +
      '    <dependency>\n' +
      '      <groupId>org.junit.jupiter</groupId>\n' +
      '      <artifactId>junit-jupiter-engine</artifactId>\n' +
      '      <version>5.8.1</version> <!-- 或者您希望使用的JUnit 5版本 -->\n' +
      '      <scope>test</scope>\n' +
      '     </dependency>\n' +
      '    ```\n' +
      '    \n' +
      '    创建表和数据'
})

const md = new MarkdownIt({
  html: true, // 允许解析 HTML 标签
})
const htmlContent = ref(md.render(form.value.content))

</script>

<style scoped>

.blogContentBody {
  overflow: auto;
}
.blogContentCard {
  margin-left: 3%;
  width: 94%;
  height: 90vh;
  overflow: auto;
}
</style>
