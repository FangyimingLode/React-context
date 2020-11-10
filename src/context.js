import React from "react";

// 创建Context对象
export const ThemeContext = React.createContext({ theme: "pink" });

// 生产者提供传值
export const ThemeProvider = ThemeContext.Provider;

// 消费者，使用值
export const ThemeConsumer = ThemeContext.Consumer;
