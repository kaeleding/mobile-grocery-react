import React, { useState, useEffect } from "react";

const GroceryListApp = () => {
  // Inline styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      backgroundColor: "#121212",
      color: "#e0e0e0",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      backgroundColor: "#1e1e1e",
      padding: "16px",
      color: "white",
      boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
    },
    headerContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    titleArea: {},
    title: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      margin: 0,
    },
    date: {
      fontSize: "0.875rem",
      color: "#888",
      margin: "4px 0 0 0",
    },
    buttonGroup: {
      display: "flex",
      gap: "8px",
    },
    button: {
      border: "none",
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      cursor: "pointer",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    addCategoryButton: {
      backgroundColor: "#4f46e5",
    },
    addItemButton: {
      backgroundColor: "#16a34a",
    },
    main: {
      flex: 1,
      overflowY: "auto",
      padding: "16px",
    },
    categoryContainer: {
      marginBottom: "24px",
    },
    categoryHeader: {
      display: "flex",
      alignItems: "center",
      marginBottom: "8px",
      padding: "8px",
      backgroundColor: "#1e1e1e",
      borderRadius: "4px",
      cursor: "pointer",
    },
    categoryIcon: {
      marginRight: "8px",
    },
    categoryName: {
      fontSize: "1.125rem",
      fontWeight: "600",
      flex: 1,
      margin: 0,
    },
    categoryList: {
      backgroundColor: "#1e1e1e",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
    },
    itemContainer: {
      borderBottom: "1px solid #333",
      userSelect: "none",
    },
    itemContent: {
      display: "flex",
      alignItems: "center",
      padding: "12px",
    },
    dragHandle: {
      marginRight: "8px",
      color: "#666",
      cursor: "grab",
    },
    reminderBadge: {
      marginRight: "12px",
      padding: "4px",
      backgroundColor: "#312e81",
      color: "#c7d2fe",
      borderRadius: "4px",
      fontSize: "0.75rem",
      width: "48px",
      textAlign: "center",
      cursor: "pointer",
    },
    checkbox: {
      width: "24px",
      height: "24px",
      marginRight: "12px",
      borderRadius: "4px",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    uncheckedBox: {
      border: "2px solid #555",
    },
    checkedBox: {
      backgroundColor: "#16a34a",
      border: "2px solid #16a34a",
    },
    itemName: {
      flex: 1,
    },
    checkedText: {
      textDecoration: "line-through",
      color: "#666",
    },
    itemIcon: {
      marginLeft: "8px",
    },
    calendarButton: {
      marginLeft: "8px",
      color: "#888",
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    emptyMessage: {
      padding: "12px",
      color: "#666",
      fontStyle: "italic",
      fontSize: "0.875rem",
    },
    modalOverlay: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      zIndex: 10,
    },
    modalContent: {
      backgroundColor: "#1e1e1e",
      borderRadius: "8px",
      padding: "24px",
      width: "100%",
      maxWidth: "24rem",
    },
    modalHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px",
    },
    modalTitle: {
      fontSize: "1.125rem",
      fontWeight: "600",
      color: "white",
      margin: 0,
    },
    closeButton: {
      background: "none",
      border: "none",
      color: "#888",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    formGroup: {
      marginBottom: "16px",
    },
    label: {
      display: "block",
      fontSize: "0.875rem",
      fontWeight: "500",
      marginBottom: "4px",
      color: "#bbb",
    },
    input: {
      width: "100%",
      backgroundColor: "#333",
      border: "1px solid #444",
      borderRadius: "4px",
      padding: "8px",
      color: "white",
      fontSize: "1rem",
    },
    iconGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "8px",
      marginBottom: "8px",
    },
    iconButton: {
      padding: "8px",
      fontSize: "1.25rem",
      borderRadius: "4px",
      background: "#333",
      border: "none",
      cursor: "pointer",
    },
    iconButtonSelected: {
      backgroundColor: "#4f46e5",
    },
    formActions: {
      display: "flex",
      justifyContent: "flex-end",
    },
    buttonPrimary: {
      backgroundColor: "#16a34a",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "8px 16px",
      cursor: "pointer",
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    buttonIndigo: {
      backgroundColor: "#4f46e5",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "8px 16px",
      cursor: "pointer",
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    buttonDanger: {
      backgroundColor: "#dc2626",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "8px 16px",
      cursor: "pointer",
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    buttonBlue: {
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "8px 16px",
      cursor: "pointer",
      fontSize: "0.875rem",
      fontWeight: "500",
      marginLeft: "auto",
    },
    actionsContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
  };

  // Simple icon components
  const Icons = {
    Plus: () => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    ),
    X: () => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    ),
    Check: () => (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    ),
    ChevronDown: () => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    ),
    ChevronUp: () => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    ),
    Grip: () => (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="9" cy="9" r="1"></circle>
        <circle cx="9" cy="15" r="1"></circle>
        <circle cx="15" cy="9" r="1"></circle>
        <circle cx="15" cy="15" r="1"></circle>
      </svg>
    ),
    Calendar: () => (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    TrashIcon: () => (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      </svg>
    ),
  };

  // Sample categories and items
  const initialCategories = [
    {
      id: 1,
      name: "Fruits",
      icon: "🍎",
      expanded: true,
      items: [
        { id: 101, name: "Apples", checked: false, icon: "🍎", reminder: null },
        {
          id: 102,
          name: "Bananas",
          checked: false,
          icon: "🍌",
          reminder: null,
        },
        {
          id: 103,
          name: "Oranges",
          checked: false,
          icon: "🍊",
          reminder: null,
        },
      ],
    },
    {
      id: 2,
      name: "Vegetables",
      icon: "🥦",
      expanded: true,
      items: [
        {
          id: 201,
          name: "Carrots",
          checked: false,
          icon: "🥕",
          reminder: null,
        },
        {
          id: 202,
          name: "Broccoli",
          checked: false,
          icon: "🥦",
          reminder: null,
        },
        {
          id: 203,
          name: "Tomatoes",
          checked: false,
          icon: "🍅",
          reminder: null,
        },
      ],
    },
    {
      id: 3,
      name: "Meats",
      icon: "🥩",
      expanded: true,
      items: [
        {
          id: 301,
          name: "Chicken",
          checked: false,
          icon: "🍗",
          reminder: null,
        },
        { id: 302, name: "Beef", checked: false, icon: "🥩", reminder: null },
        { id: 303, name: "Fish", checked: false, icon: "🐟", reminder: null },
      ],
    },
    {
      id: 4,
      name: "Toiletries",
      icon: "🧴",
      expanded: true,
      items: [
        {
          id: 401,
          name: "Toothpaste",
          checked: false,
          icon: "🪥",
          reminder: null,
        },
        { id: 402, name: "Soap", checked: false, icon: "🧼", reminder: null },
        {
          id: 403,
          name: "Shampoo",
          checked: false,
          icon: "🧴",
          reminder: null,
        },
      ],
    },
  ];

  const [groceryCategories, setGroceryCategories] = useState(() => {
    try {
      const saved = localStorage.getItem("groceryData");
      return saved ? JSON.parse(saved) : initialCategories;
    } catch (error) {
      console.error("Error loading from localStorage:", error);
      return initialCategories;
    }
  });

  const [newItemName, setNewItemName] = useState("");
  const [newItemCategory, setNewItemCategory] = useState(1);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [reminderDay, setReminderDay] = useState("Monday");
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryIcon, setNewCategoryIcon] = useState("📦");
  const [draggedItem, setDraggedItem] = useState(null);
  // Add these state variables for category dragging
  const [draggedCategory, setDraggedCategory] = useState(null);

  // Add category drag handlers
  const handleCategoryDragStart = (e, categoryId) => {
    setDraggedCategory(categoryId);
    // This helps with the dragging visual
    e.dataTransfer.effectAllowed = "move";
  };

  const handleCategoryDragOver = (e, categoryId) => {
    e.preventDefault();
    if (!draggedCategory || draggedCategory === categoryId) return;

    const draggedIndex = groceryCategories.findIndex(
      (c) => c.id === draggedCategory
    );
    const targetIndex = groceryCategories.findIndex((c) => c.id === categoryId);

    if (draggedIndex === targetIndex) return;

    // Create a copy and reorder
    const newCategories = [...groceryCategories];
    const [removed] = newCategories.splice(draggedIndex, 1);
    newCategories.splice(targetIndex, 0, removed);

    setGroceryCategories(newCategories);
  };

  const handleCategoryDragEnd = () => {
    setDraggedCategory(null);
  };
  // Save to localStorage whenever groceryCategories changes
  useEffect(() => {
    try {
      localStorage.setItem("groceryData", JSON.stringify(groceryCategories));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [groceryCategories]);

  // Check for daily reminders
  // Check for daily reminders
  useEffect(() => {
    const checkReminders = () => {
      const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

      const updatedCategories = groceryCategories.map((category) => {
        const updatedItems = category.items.map((item) => {
          if (item.reminder === today) {
            return { ...item, checked: false };
          }
          return item;
        });
        return { ...category, items: updatedItems };
      });

      // Only update state if something actually changed
      const hasChanges =
        JSON.stringify(updatedCategories) !== JSON.stringify(groceryCategories);
      if (hasChanges) {
        setGroceryCategories(updatedCategories);
      }
    };

    // Run once on load
    checkReminders();

    // Set up daily check
    const interval = setInterval(checkReminders, 1000 * 60 * 60); // Check every hour

    return () => clearInterval(interval);
  }, []); // <-- Empty dependency array, we only want this to run on mount

  const toggleItemCheck = (categoryId, itemId) => {
    const updatedCategories = groceryCategories.map((category) => {
      if (category.id === categoryId) {
        const updatedItems = category.items.map((item) => {
          if (item.id === itemId) {
            return { ...item, checked: !item.checked };
          }
          return item;
        });
        return { ...category, items: updatedItems };
      }
      return category;
    });

    setGroceryCategories(updatedCategories);
  };

  const handleAddItem = () => {
    if (!newItemName.trim()) return;

    const allItemIds = groceryCategories.flatMap((c) =>
      c.items.map((i) => i.id)
    );
    const newId = allItemIds.length > 0 ? Math.max(...allItemIds) + 1 : 101;

    const updatedCategories = groceryCategories.map((category) => {
      if (category.id === parseInt(newItemCategory)) {
        return {
          ...category,
          items: [
            ...category.items,
            {
              id: newId,
              name: newItemName,
              checked: false,
              icon: category.icon, // Default to category icon
              reminder: null,
            },
          ],
        };
      }
      return category;
    });

    setGroceryCategories(updatedCategories);
    setNewItemName("");
    setShowAddForm(false);
  };

  const handleAddCategory = () => {
    if (!newCategoryName.trim()) return;

    const allCategoryIds = groceryCategories.map((c) => c.id);
    const newId =
      allCategoryIds.length > 0 ? Math.max(...allCategoryIds) + 1 : 1;

    const newCategory = {
      id: newId,
      name: newCategoryName,
      icon: newCategoryIcon,
      expanded: true,
      items: [],
    };

    setGroceryCategories([...groceryCategories, newCategory]);
    setNewCategoryName("");
    setNewCategoryIcon("📦");
    setShowAddCategoryForm(false);
  };

  const openReminderModal = (categoryId, itemId) => {
    setSelectedItemId({ categoryId, itemId });
    setShowReminderModal(true);
  };

  const setReminder = () => {
    if (!selectedItemId) return;

    const updatedCategories = groceryCategories.map((category) => {
      if (category.id === selectedItemId.categoryId) {
        const updatedItems = category.items.map((item) => {
          if (item.id === selectedItemId.itemId) {
            return { ...item, reminder: reminderDay };
          }
          return item;
        });
        return { ...category, items: updatedItems };
      }
      return category;
    });

    setGroceryCategories(updatedCategories);
    setShowReminderModal(false);
    setSelectedItemId(null);
  };

  const removeReminder = () => {
    if (!selectedItemId) return;

    const updatedCategories = groceryCategories.map((category) => {
      if (category.id === selectedItemId.categoryId) {
        const updatedItems = category.items.map((item) => {
          if (item.id === selectedItemId.itemId) {
            return { ...item, reminder: null };
          }
          return item;
        });
        return { ...category, items: updatedItems };
      }
      return category;
    });

    setGroceryCategories(updatedCategories);
    setShowReminderModal(false);
    setSelectedItemId(null);
  };

  const [showDeleteItemConfirm, setShowDeleteItemConfirm] = useState(false);
  const [showDeleteCategoryConfirm, setShowDeleteCategoryConfirm] =
    useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  // Modify the existing delete functions to show confirmation first
  const confirmDeleteItem = (categoryId, itemId) => {
    setItemToDelete({ categoryId, itemId });
    setShowDeleteItemConfirm(true);
  };

  const confirmDeleteCategory = (categoryId) => {
    setCategoryToDelete(categoryId);
    setShowDeleteCategoryConfirm(true);
  };

  // The actual delete functions remain the same
  const deleteItem = () => {
    if (!itemToDelete) return;

    const updatedCategories = groceryCategories.map((category) => {
      if (category.id === itemToDelete.categoryId) {
        return {
          ...category,
          items: category.items.filter(
            (item) => item.id !== itemToDelete.itemId
          ),
        };
      }
      return category;
    });

    setGroceryCategories(updatedCategories);
    setShowDeleteItemConfirm(false);
    setItemToDelete(null);
  };

  const deleteCategory = () => {
    if (!categoryToDelete) return;
    setGroceryCategories(
      groceryCategories.filter((category) => category.id !== categoryToDelete)
    );
    setShowDeleteCategoryConfirm(false);
    setCategoryToDelete(null);
  };

  const toggleCategoryExpand = (categoryId) => {
    const updatedCategories = groceryCategories.map((category) => {
      if (category.id === categoryId) {
        return { ...category, expanded: !category.expanded };
      }
      return category;
    });

    setGroceryCategories(updatedCategories);
  };

  const handleDragStart = (e, categoryId, itemId) => {
    setDraggedItem({ categoryId, itemId });
  };

  const handleDragOver = (e, categoryId, itemId) => {
    e.preventDefault();
    if (!draggedItem) return;

    // Don't do anything if dragging over the same item
    if (draggedItem.categoryId === categoryId && draggedItem.itemId === itemId)
      return;

    const sourceCategory = groceryCategories.find(
      (c) => c.id === draggedItem.categoryId
    );
    const sourceItem = sourceCategory.items.find(
      (i) => i.id === draggedItem.itemId
    );

    // If dragging to a different category
    if (draggedItem.categoryId !== categoryId) {
      const updatedCategories = groceryCategories.map((category) => {
        // Remove from source category
        if (category.id === draggedItem.categoryId) {
          return {
            ...category,
            items: category.items.filter(
              (item) => item.id !== draggedItem.itemId
            ),
          };
        }

        // Add to target category
        if (category.id === categoryId) {
          const targetIndex = category.items.findIndex(
            (item) => item.id === itemId
          );
          const newItems = [...category.items];
          newItems.splice(targetIndex, 0, sourceItem);

          return {
            ...category,
            items: newItems,
          };
        }

        return category;
      });

      setGroceryCategories(updatedCategories);
      setDraggedItem({ categoryId, itemId: sourceItem.id });
    }
    // If reordering within the same category
    else {
      const updatedCategories = groceryCategories.map((category) => {
        if (category.id === categoryId) {
          const sourceIndex = category.items.findIndex(
            (item) => item.id === draggedItem.itemId
          );
          const targetIndex = category.items.findIndex(
            (item) => item.id === itemId
          );

          const newItems = [...category.items];
          const [removed] = newItems.splice(sourceIndex, 1);
          newItems.splice(targetIndex, 0, removed);

          return {
            ...category,
            items: newItems,
          };
        }
        return category;
      });

      setGroceryCategories(updatedCategories);
    }
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const commonIcons = [
    "📦",
    "🍎",
    "🥦",
    "🥩",
    "🧴",
    "🥛",
    "🍚",
    "🧻",
    "🍞",
    "🥫",
    "🧊",
    "🍪",
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.titleArea}>
            <h1 style={styles.title}>Grocery List</h1>
            <p style={styles.date}>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div style={styles.buttonGroup}>
            <button
              onClick={() => setShowAddCategoryForm(true)}
              style={{ ...styles.button, ...styles.addCategoryButton }}
              aria-label="Add Category"
            >
              <Icons.Plus />
            </button>
            <button
              onClick={() => setShowAddForm(true)}
              style={{ ...styles.button, ...styles.addItemButton }}
              aria-label="Add Item"
            >
              <Icons.Plus />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        {groceryCategories.map((category) => (
          <div key={category.id} style={styles.categoryContainer}>
            <div
              style={{
                ...styles.categoryHeader,
                opacity: draggedCategory === category.id ? 0.5 : 1,
                cursor: "grab",
              }}
              onClick={() => toggleCategoryExpand(category.id)}
              draggable={true}
              onDragStart={(e) => handleCategoryDragStart(e, category.id)}
              onDragOver={(e) => handleCategoryDragOver(e, category.id)}
              onDragEnd={handleCategoryDragEnd}
            >
              {/* Add a grip icon at the start of the header */}
              <div style={{ ...styles.dragHandle, marginRight: "8px" }}>
                <Icons.Grip />
              </div>
              <span style={styles.categoryIcon}>{category.icon}</span>
              <h2 style={styles.categoryName}>{category.name}</h2>
              {category.expanded ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  confirmDeleteCategory(category.id);
                }}
                style={{
                  ...styles.closeButton,
                  marginLeft: "8px",
                }}
                aria-label="Delete category"
              >
                <Icons.TrashIcon />
              </button>
            </div>

            {category.expanded && (
              <div style={styles.categoryList}>
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    style={styles.itemContainer}
                    draggable={true}
                    onDragStart={(e) =>
                      handleDragStart(e, category.id, item.id)
                    }
                    onDragOver={(e) => handleDragOver(e, category.id, item.id)}
                    onDragEnd={handleDragEnd}
                  >
                    <div style={styles.itemContent}>
                      {/* Drag handle */}
                      <div style={styles.dragHandle}>
                        <Icons.Grip />
                      </div>

                      {/* Day reminder (if set) */}
                      {item.reminder && (
                        <div
                          style={styles.reminderBadge}
                          onClick={(e) => {
                            e.stopPropagation();
                            openReminderModal(category.id, item.id);
                          }}
                        >
                          {item.reminder.substring(0, 3)}
                        </div>
                      )}

                      {/* Checkbox */}
                      <div
                        style={{
                          ...styles.checkbox,
                          ...(item.checked
                            ? styles.checkedBox
                            : styles.uncheckedBox),
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleItemCheck(category.id, item.id);
                        }}
                      >
                        {item.checked && <Icons.Check />}
                      </div>

                      {/* Item name */}
                      <span
                        style={{
                          ...styles.itemName,
                          ...(item.checked ? styles.checkedText : {}),
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleItemCheck(category.id, item.id);
                        }}
                      >
                        {item.name}
                      </span>

                      {/* Icon */}
                      <span style={styles.itemIcon}>{item.icon}</span>

                      <button
                        style={styles.calendarButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          confirmDeleteItem(category.id, item.id);
                        }}
                        aria-label="Delete item"
                      >
                        <Icons.TrashIcon />
                      </button>

                      {/* Calendar button (if no reminder set) */}
                      {!item.reminder && (
                        <button
                          style={styles.calendarButton}
                          onClick={(e) => {
                            e.stopPropagation();
                            openReminderModal(category.id, item.id);
                          }}
                          aria-label="Set reminder"
                        >
                          <Icons.Calendar />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                {category.items.length === 0 && (
                  <div style={styles.emptyMessage}>
                    No items in this category. Add some!
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </main>

      {/* Add Item Modal */}
      {showAddForm && (
        <div style={styles.modalOverlay} onClick={() => setShowAddForm(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Add New Item</h2>
              <button
                onClick={() => setShowAddForm(false)}
                style={styles.closeButton}
                aria-label="Close"
              >
                <Icons.X />
              </button>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="newItemName">
                Item Name
              </label>
              <input
                id="newItemName"
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                style={styles.input}
                placeholder="Enter item name"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="newItemCategory">
                Category
              </label>
              <select
                id="newItemCategory"
                value={newItemCategory}
                onChange={(e) => setNewItemCategory(e.target.value)}
                style={styles.input}
              >
                {groceryCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div style={styles.formActions}>
              <button onClick={handleAddItem} style={styles.buttonPrimary}>
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Category Modal */}
      {showAddCategoryForm && (
        <div
          style={styles.modalOverlay}
          onClick={() => setShowAddCategoryForm(false)}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Add New Category</h2>
              <button
                onClick={() => setShowAddCategoryForm(false)}
                style={styles.closeButton}
                aria-label="Close"
              >
                <Icons.X />
              </button>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="newCategoryName">
                Category Name
              </label>
              <input
                id="newCategoryName"
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                style={styles.input}
                placeholder="Enter category name"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Category Icon</label>
              <div style={styles.iconGrid}>
                {commonIcons.map((icon, index) => (
                  <button
                    key={index}
                    onClick={() => setNewCategoryIcon(icon)}
                    style={{
                      ...styles.iconButton,
                      ...(newCategoryIcon === icon
                        ? styles.iconButtonSelected
                        : {}),
                    }}
                    aria-label={`Select ${icon} icon`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={newCategoryIcon}
                onChange={(e) => setNewCategoryIcon(e.target.value)}
                style={styles.input}
                placeholder="Or type emoji here"
                maxLength={2}
              />
            </div>

            <div style={styles.formActions}>
              <button onClick={handleAddCategory} style={styles.buttonIndigo}>
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reminder Modal */}
      {showReminderModal && (
        <div
          style={styles.modalOverlay}
          onClick={() => setShowReminderModal(false)}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Set Recurring Reminder</h2>
              <button
                onClick={() => setShowReminderModal(false)}
                style={styles.closeButton}
                aria-label="Close"
              >
                <Icons.X />
              </button>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="reminderDay">
                Day of Week
              </label>
              <select
                id="reminderDay"
                value={reminderDay}
                onChange={(e) => setReminderDay(e.target.value)}
                style={styles.input}
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>

            <div style={styles.actionsContainer}>
              {selectedItemId &&
                groceryCategories
                  .find((c) => c.id === selectedItemId.categoryId)
                  ?.items.find((i) => i.id === selectedItemId.itemId)
                  ?.reminder && (
                  <button onClick={removeReminder} style={styles.buttonDanger}>
                    Remove Reminder
                  </button>
                )}
              <button onClick={setReminder} style={styles.buttonBlue}>
                Set Reminder
              </button>
            </div>
          </div>
        </div>
      )}
      {showDeleteItemConfirm && (
        <div
          style={styles.modalOverlay}
          onClick={() => setShowDeleteItemConfirm(false)}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Confirm Delete</h2>
              <button
                onClick={() => setShowDeleteItemConfirm(false)}
                style={styles.closeButton}
                aria-label="Close"
              >
                <Icons.X />
              </button>
            </div>

            <p style={{ marginBottom: "20px", color: "#ddd" }}>
              Are you sure you want to delete this item? This cannot be undone.
            </p>

            <div style={styles.actionsContainer}>
              <button
                onClick={() => setShowDeleteItemConfirm(false)}
                style={{
                  backgroundColor: "#333",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "8px 16px",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                Cancel
              </button>
              <button onClick={deleteItem} style={styles.buttonDanger}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Category Confirmation */}
      {showDeleteCategoryConfirm && (
        <div
          style={styles.modalOverlay}
          onClick={() => setShowDeleteCategoryConfirm(false)}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Confirm Delete</h2>
              <button
                onClick={() => setShowDeleteCategoryConfirm(false)}
                style={styles.closeButton}
                aria-label="Close"
              >
                <Icons.X />
              </button>
            </div>

            <p style={{ marginBottom: "20px", color: "#ddd" }}>
              Are you sure you want to delete this category and all its items?
              This cannot be undone.
            </p>

            <div style={styles.actionsContainer}>
              <button
                onClick={() => setShowDeleteCategoryConfirm(false)}
                style={{
                  backgroundColor: "#333",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "8px 16px",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                Cancel
              </button>
              <button onClick={deleteCategory} style={styles.buttonDanger}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroceryListApp;
