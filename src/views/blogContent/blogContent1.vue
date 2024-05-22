<!--<template>-->
<!--  <el-card class="blogContentCard">-->
<!--    <div class="blogContentBody">-->
<!--      <strong>你好</strong>你好-->
<!--      <div>-->
<!--        <el-form-item label="公告内容" prop="content">-->
<!--          <md-editor v-model="form.content"/>-->
<!--        </el-form-item>-->
<!--      </div>-->
<!--      <div>-->
<!--        <div v-html="htmlContent"></div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </el-card>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import { ref } from 'vue'-->
<!--import {MdEditor} from "md-editor-v3";-->
<!--import 'md-editor-v3/lib/style.css'-->
<!--import MarkdownIt from "markdown-it";-->

<!--const form = ref({-->
<!--  content: "# Java基础\n" +-->
<!--      "\n" +-->
<!--      "## Java历史\n" +-->
<!--      "\n" +-->
<!--      "Java的历史可以追溯到20世纪90年代初。以下是Java的主要历史里程碑：\n" +-->
<!--      "\n" +-->
<!--      "1. **1991年**：最初的想法由Sun Microsystems的James Gosling、Mike Sheridan和Patrick Naughton提出。他们的目标是开发一种简单、可移植、面向对象的编程语言，用于消费类电子设备（如电视机顶盒）。该项目最初被称为“Green Project”。\n" +-->
<!--      "2. **1995年5月23日**：Java 1.0正式发布。这是Java的第一个公开版本，其中包含了许多现代Java开发人员熟悉的核心功能，如Java语言规范、Java开发工具包（JDK）、Java虚拟机（JVM）等。\n" +-->
<!--      "3. **1996年1月**：Sun Microsystems发布了Java的第一个企业版 - Java Enterprise Edition（Java EE），旨在为企业级应用程序提供支持。\n" +-->
<!--      "4. **1997年2月**：Java 1.1发布，引入了重要的新功能和改进，如内部类、JAR文件、AWT事件处理等。\n" +-->
<!--      "5. **1998年12月8日**：Java 2发布，也被称为Java 1.2。Java 2引入了Java平台的重大变化，包括Swing GUI工具包、集合框架、Java命名和目录接口（JNDI）等。\n" +-->
<!--      "6. **2000年5月8日**：Java 2平台的企业版（Java EE）1.2发布。这个版本引入了EJB（Enterprise JavaBeans）和JSP（JavaServer Pages）等关键技术。\n" +-->
<!--      "7. **2004年9月30日**：Java 5发布，也被称为Java 1.5。这是一个重要的版本，引入了许多重要的语言和库特性，如泛型、枚举、自动装箱/拆箱、增强的for循环、可变参数等。\n" +-->
<!--      "8. **2006年12月11日**：Java平台标准版（Java SE）6发布。Java 6增加了许多新功能，如JAXB（Java架构与XML绑定）、JDBC 4.0等。\n" +-->
<!--      "9. **2011年7月28日**：Java 7发布，引入了一些重要的新功能，如钻石语法、try-with-resources语句、switch语句的字符串支持等。\n" +-->
<!--      "10. **2014年3月18日**：Java 8发布。Java 8引入了Lambda表达式、Stream API、新的日期/时间API（java.time包）等重大改进。\n" +-->
<!--      "11. **2017年9月21日**：Java 9发布，引入了模块化系统、JShell交互式Shell、改进的HTTP客户端等新功能。\n" +-->
<!--      "12. **2018年9月25日**：Java 11发布。Java 11是Oracle发布的首个长期支持（LTS）版本，同时也是自Jigsaw项目以来的第一个LTS版本。它包含了许多新的功能和改进，如HTTP客户端API的标准化、局部变量类型推断等。\n" +-->
<!--      "\n" +-->
<!--      "随着时间的推移，Java持续发展，并逐渐成为一种广泛应用于企业级开发、移动应用程序开发、大型云服务以及物联网等各个领域的编程语言。它的跨平台性、稳定性、安全性和丰富的生态系统使其成为许多开发人员的首选语言之一。\n" +-->
<!--      "\n" +-->
<!--      "## 开始\n" +-->
<!--      "\n" +-->
<!--      "1. **Java的四种对象类型**"-->
<!--})-->

<!--const md = new MarkdownIt({-->
<!--  html: true, // 允许解析 HTML 标签-->
<!--})-->
<!--const htmlContent = ref(md.render(form.value.content))-->

<!--</script>-->

<!--<style scoped>-->
<!--.blogContentBody {-->
<!--  overflow: auto;-->
<!--}-->
<!--.blogContentCard {-->
<!--  margin: 15px;-->
<!--  width: 98%;-->
<!--  overflow: auto;-->
<!--}-->
<!--</style>-->
