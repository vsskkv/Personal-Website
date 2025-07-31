// Code-heavy blog post example
export const blogPost = {
  slug: "code-heavy-post",
  title: "Advanced Power Apps Patterns and Best Practices",
  date: "2024-12-19",
  excerpt: "Deep dive into advanced Power Apps development patterns with extensive code examples.",
  image: "/avatar.png",
  published: true,
  content: [
    { type: "paragraph", text: "Power Apps development has evolved significantly, and understanding advanced patterns can make the difference between a good app and a great one. In this post, I'll share some advanced patterns I've used in production applications." },
    
    { type: "heading", level: 2, text: "1. Advanced Collection Management" },
    
    { type: "paragraph", text: "Collections are powerful, but managing them properly is crucial for performance:" },
    
    { type: "code", language: "js", code: "// Initialize collections on app start\nOnStart = Collect(\n    Users,\n    Filter(Office365Users.MyProfile(), IsActive = true)\n);\n\n// Cache frequently accessed data\nCollect(\n    CachedData,\n    Filter(MyDataSource, Status = 'Active')\n);" },
    
    { type: "paragraph", text: "Use collections for complex filtering operations:" },
    
    { type: "code", language: "js", code: "// Complex filtering with multiple conditions\nvar filteredData = Filter(\n    CachedData,\n    And(\n        Status = 'Active',\n        Or(\n            Category = 'Important',\n            Priority = 'High'\n        ),\n        CreatedDate >= DateAdd(Now(), -30, Days)\n    )\n);" },
    
    { type: "heading", level: 2, text: "2. Error Handling Patterns" },
    
    { type: "paragraph", text: "Robust error handling is essential for production apps:" },
    
    { type: "code", language: "js", code: "// Comprehensive error handling function\nSet(\n    varErrorHandler,\n    With(\n        {\n            error: LastError\n        },\n        Switch(\n            error.Kind,\n            ErrorKind.Network,\n            Notify(\"Network error. Please check your connection.\", NotificationType.Error),\n            ErrorKind.Validation,\n            Notify(\"Please check your input and try again.\", NotificationType.Warning),\n            ErrorKind.Permission,\n            Notify(\"You don't have permission to perform this action.\", NotificationType.Error),\n            Notify(\"An unexpected error occurred. Please try again.\", NotificationType.Error)\n        )\n    )\n);" },
    
    { type: "paragraph", text: "Use this pattern for all data operations:" },
    
    { type: "code", language: "js", code: "// Safe data operations\nPatch(\n    MyDataSource,\n    Defaults(MyDataSource),\n    {\n        Title: txtTitle.Text,\n        Description: txtDescription.Text,\n        Status: 'Draft'\n    }\n);\n\nIf(\n    IsError(varErrorHandler),\n    varErrorHandler,\n    Notify(\"Record saved successfully!\", NotificationType.Success)\n);" },
    
    { type: "heading", level: 2, text: "3. Advanced Form Validation" },
    
    { type: "paragraph", text: "Create reusable validation patterns:" },
    
    { type: "code", language: "js", code: "// Validation helper functions\nSet(\n    varValidators,\n    {\n        required: (value) => !IsBlank(value),\n        email: (value) => IsMatch(value, \"^[^@]+@[^@]+\\.[^@]+$\"),\n        phone: (value) => IsMatch(value, \"^[+]?[0-9\\s\\-\\(\\)]{10,}$\"),\n        minLength: (value, min) => Len(value) >= min,\n        maxLength: (value, max) => Len(value) <= max\n    }\n);" },
    
    { type: "paragraph", text: "Use these validators in your forms:" },
    
    { type: "code", language: "js", code: "// Form validation\nSet(\n    varFormErrors,\n    With(\n        {\n            email: txtEmail.Text,\n            phone: txtPhone.Text,\n            name: txtName.Text\n        },\n        If(\n            !varValidators.required(name),\n            \"Name is required\",\n            If(\n                !varValidators.email(email),\n                \"Please enter a valid email address\",\n                If(\n                    !varValidators.phone(phone),\n                    \"Please enter a valid phone number\",\n                    \"\"\n                )\n            )\n        )\n    )\n);" },
    
    { type: "heading", level: 2, text: "4. Performance Optimization" },
    
    { type: "paragraph", text: "Optimize your app for better performance:" },
    
    { type: "code", language: "js", code: "// Lazy loading pattern\nSet(\n    varLoadMoreData,\n    With(\n        {\n            currentCount: CountRows(varDataCollection),\n            pageSize: 50\n        },\n        Collect(\n            varDataCollection,\n            FirstN(\n                Skip(\n                    Filter(MyDataSource, Status = 'Active'),\n                    currentCount\n                ),\n                pageSize\n            )\n        )\n    )\n);" },
    
    { type: "paragraph", text: "Implement virtual scrolling for large datasets:" },
    
    { type: "code", language: "js", code: "// Virtual scrolling helper\nSet(\n    varVisibleItems,\n    With(\n        {\n            scrollPosition: Gallery1.Y,\n            itemHeight: 80,\n            visibleHeight: Gallery1.Height\n        },\n        Filter(\n            varDataCollection,\n            And(\n                Index >= Floor(scrollPosition / itemHeight),\n                Index < Floor((scrollPosition + visibleHeight) / itemHeight)\n            )\n        )\n    )\n);" },
    
    { type: "heading", level: 2, text: "5. Advanced UI Patterns" },
    
    { type: "paragraph", text: "Create dynamic UI components:" },
    
    { type: "code", language: "js", code: "// Dynamic color theming\nSet(\n    varThemeColors,\n    {\n        primary: If(varIsDarkMode, \"#1a1a1a\", \"#ffffff\"),\n        secondary: If(varIsDarkMode, \"#2d2d2d\", \"#f5f5f5\"),\n        text: If(varIsDarkMode, \"#ffffff\", \"#000000\"),\n        accent: \"#0078d4\"\n    }\n);" },
    
    { type: "paragraph", text: "Use these patterns to create responsive layouts:" },
    
    { type: "code", language: "js", code: "// Responsive layout logic\nSet(\n    varLayoutConfig,\n    With(\n        {\n            screenWidth: Parent.Width,\n            isMobile: screenWidth < 768,\n            isTablet: And(screenWidth >= 768, screenWidth < 1024)\n        },\n        {\n            columns: If(isMobile, 1, If(isTablet, 2, 3)),\n            spacing: If(isMobile, 10, 20),\n            fontSize: If(isMobile, 14, 16)\n        }\n    )\n);" },
    
    { type: "heading", level: 2, text: "Conclusion" },
    
    { type: "paragraph", text: "These patterns will help you build more robust, performant, and maintainable Power Apps. Remember to always test thoroughly and consider your users' needs when implementing these patterns." },
    
    { type: "code", language: "js", code: "// Final thought: Always prioritize user experience\nSet(\n    varSuccess,\n    With(\n        {\n            appPerformance: varAppLoadTime < 3000,\n            userSatisfaction: varUserRating > 4.5\n        },\n        And(appPerformance, userSatisfaction)\n    )\n);" }
  ]
}; 