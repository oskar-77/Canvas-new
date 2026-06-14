import { getUiLanguage, type UiLanguage } from "@/lib/ui-language";

type Dict = Record<string, { zh: string; en: string; ar: string }>;

const dict: Dict = {
  "app.refresh": { zh: "刷新页面", en: "Refresh", ar: "تحديث الصفحة" },
  "app.tryContinue": { zh: "尝试继续", en: "Try to continue", ar: "محاولة المتابعة" },

  "chat.hello": { zh: "你好！我是你的 AI 助手。请告诉我你的需求。", en: "Hi! I'm your AI assistant. Tell me what you need.", ar: "مرحباً! أنا مساعدك الذكي. أخبرني بما تحتاج." },
  "chat.newChat": { zh: "你好！新对话已开始。请告诉我你的需求。", en: "Hi! New chat started. Tell me what you need.", ar: "مرحباً! بدأت محادثة جديدة. أخبرني بما تحتاج." },
  "chat.cleared": { zh: "你好！对话记录已清空。", en: "Hi! Chat history has been cleared.", ar: "مرحباً! تم مسح سجل المحادثة." },

  "common.cancel": { zh: "取消", en: "Cancel", ar: "إلغاء" },
  "common.save": { zh: "保存", en: "Save", ar: "حفظ" },
  "common.clear": { zh: "清空", en: "Clear", ar: "مسح" },

  "settings.title": { zh: "配置设置", en: "Settings", ar: "الإعدادات" },
  "settings.subtitle": { zh: "配置 AI 模型参数与 API 密钥", en: "Configure model parameters and API keys", ar: "ضبط معاملات نموذج الذكاء الاصطناعي ومفاتيح API" },
  "settings.language": { zh: "界面语言", en: "Language", ar: "لغة الواجهة" },
  "settings.language.zh": { zh: "中文", en: "Chinese", ar: "الصينية" },
  "settings.language.en": { zh: "英文", en: "English", ar: "الإنجليزية" },
  "settings.language.ar": { zh: "阿拉伯文", en: "Arabic", ar: "العربية" },
  "settings.buttonTitle": { zh: "设置", en: "Settings", ar: "الإعدادات" },
  "settings.chatModel": { zh: "对话模型 (Chat Model)", en: "Chat Model", ar: "نموذج المحادثة" },
  "settings.imageModel": { zh: "绘图模型 (Image Model)", en: "Image Model", ar: "نموذج الصور" },

  "reset.title": { zh: "清空对话", en: "Clear Chat", ar: "مسح المحادثة" },
  "reset.desc": {
    zh: "清空对话将同时清空当前工作台内容。此操作无法撤销。PPT 工作台会回到开始页面。",
    en: "Clearing chat will also clear the current workspace content. This action cannot be undone. The PPT workspace will return to the start page.",
    ar: "مسح المحادثة سيزيل أيضاً محتوى مساحة العمل الحالية. لا يمكن التراجع عن هذا الإجراء.",
  },

  "workspace.flow.title": { zh: "流程图助手", en: "Flow Assistant", ar: "مساعد التدفق" },
  "workspace.flow.placeholder": { zh: "描述流程…", en: "Describe the flow…", ar: "صف التدفق…" },
  "workspace.cad.title": { zh: "CAD 助手", en: "CAD Assistant", ar: "مساعد التصميم" },
  "workspace.cad.placeholder": { zh: "描述 CAD…", en: "Describe the CAD…", ar: "صف التصميم…" },
  "workspace.ppt.title": { zh: "PPT 助手", en: "PPT Assistant", ar: "مساعد العروض" },
  "workspace.ppt.placeholder": { zh: "描述 PPT…", en: "Describe the PPT…", ar: "صف العرض…" },
  "workspace.default.title": { zh: "AI 助手", en: "AI Assistant", ar: "المساعد الذكي" },

  "chat.stop": { zh: "暂停", en: "Pause", ar: "إيقاف" },
  "chat.send": { zh: "发送", en: "Send", ar: "إرسال" },
  "chat.uploadFile": { zh: "上传文件", en: "Upload file", ar: "رفع ملف" },
  "chat.uploadImage": { zh: "上传图片", en: "Upload image", ar: "رفع صورة" },
  "chat.rules": { zh: "规则", en: "Rules", ar: "القواعد" },
  "chat.expand": { zh: "展开聊天", en: "Expand chat", ar: "توسيع المحادثة" },
  "chat.globalConstraints": { zh: "全局约束", en: "Global constraints", ar: "القيود العامة" },
  "chat.newChatTitle": { zh: "新开对话", en: "New chat", ar: "محادثة جديدة" },
  "chat.historyTitle": { zh: "版本历史", en: "History", ar: "سجل الإصدارات" },
  "chat.clearChatTitle": { zh: "清空对话", en: "Clear chat", ar: "مسح المحادثة" },
  "chat.collapseLocked": { zh: "PPT 生成完成前不能收起聊天", en: "Chat cannot be collapsed while PPT is generating", ar: "لا يمكن طي المحادثة أثناء إنشاء العرض" },
  "chat.collapse": { zh: "收起聊天", en: "Collapse chat", ar: "طي المحادثة" },

  "nav.flow": { zh: "流程绘制", en: "Flow", ar: "التدفق" },
  "nav.cad": { zh: "室内设计", en: "CAD", ar: "التصميم الداخلي" },
  "nav.ppt": { zh: "PPT演示", en: "PPT", ar: "العروض" },
  "nav.poster": { zh: "海报", en: "Poster", ar: "الملصق" },
  "nav.infographic": { zh: "信息图", en: "Infographic", ar: "المخطط" },
  "nav.product": { zh: "产品介绍", en: "Product", ar: "المنتج" },

  "flow.addToChat": { zh: "添加到对话", en: "Add to chat", ar: "إضافة للمحادثة" },
  "flow.addToChat.tooltip": { zh: "将当前图表添加到对话", en: "Add current diagram to chat", ar: "إضافة المخطط الحالي للمحادثة" },
  "flow.saving": { zh: "保存中...", en: "Saving...", ar: "جاري الحفظ..." },
  "flow.updatingChat": { zh: "更新对话中...", en: "Updating chat...", ar: "تحديث المحادثة..." },
  "flow.editorTitle": { zh: "流程图编辑器", en: "Flowchart Editor", ar: "محرر المخططات" },

  "history.title": { zh: "版本历史", en: "Version History", ar: "سجل الإصدارات" },
  "history.clear": { zh: "清空", en: "Clear", ar: "مسح" },
  "history.empty": { zh: "暂无历史记录", en: "No history yet", ar: "لا يوجد سجل بعد" },
  "history.restore": { zh: "恢复", en: "Restore", ar: "استعادة" },
  "history.chars": { zh: "{{n}} 字符", en: "{{n}} chars", ar: "{{n}} حرف" },

  "constraints.title": { zh: "全局规则约束", en: "Global Constraints", ar: "القيود العامة" },
  "constraints.desc": { zh: "设置适用于当前工作区的全局系统提示词。", en: "Set global system instructions for the current workspace.", ar: "ضع تعليمات النظام العامة لمساحة العمل الحالية." },
  "constraints.placeholder": { zh: "例如：始终使用中文回答，代码注释必须详细...", en: "e.g. Always respond in English. Code comments must be detailed...", ar: "مثال: أجب دائماً بالعربية. يجب أن تكون التعليقات مفصّلة..." },

  "saveDialog.title": { zh: "保存图表", en: "Save Diagram", ar: "حفظ المخطط" },
  "saveDialog.filename": { zh: "文件名", en: "Filename", ar: "اسم الملف" },
  "saveDialog.format": { zh: "格式", en: "Format", ar: "الصيغة" },
  "saveDialog.chooseFormat": { zh: "选择格式", en: "Choose format", ar: "اختر الصيغة" },

  "error.missingApiKey": { zh: "请先在设置中配置 API Key", en: "Please configure an API key in Settings first.", ar: "يرجى إعداد مفتاح API في الإعدادات أولاً." },
};

export function t(lang: UiLanguage, key: string, vars?: Record<string, string | number>) {
  const entry = dict[key];
  const template = entry ? (entry[lang] ?? entry["en"] ?? key) : key;
  if (!vars) return template;
  let out = template;
  for (const [k, v] of Object.entries(vars)) {
    out = out.split(`{{${k}}}`).join(String(v));
  }
  return out;
}

export function tAuto(key: string, vars?: Record<string, string | number>) {
  return t(getUiLanguage(), key, vars);
}
