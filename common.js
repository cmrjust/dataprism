document.addEventListener("DOMContentLoaded", () => {
  // 1. 自动注入浏览器标签页图标 (Favicon)
  if (!document.querySelector("link[rel='icon']")) {
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = "./logo.png";
    document.head.appendChild(favicon);
  }

  // 2. 自动替换导航栏的旧 Logo 块
  // 寻找所有包含 onclick 跳转 index.html 的导航栏 Logo 容器
  const logoContainers = document.querySelectorAll("[onclick*='index.html']");
  
  logoContainers.forEach(container => {
    // 找到里面那个旧的写着字母 "D" 的 div 方块
    const oldDiv = container.querySelector("div");
    
    if (oldDiv && oldDiv.textContent.trim() === "D") {
      // 创建新的 img 标签
      const newImg = document.createElement("img");
      newImg.src = "./logo.png";
      newImg.alt = "DataPrism Logo";
      newImg.className = "h-8 w-auto object-contain";
      
      // 把旧的 div 替换成新的 img
      container.replaceChild(newImg, oldDiv);
    }
  });
});