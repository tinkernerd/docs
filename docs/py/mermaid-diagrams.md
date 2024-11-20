---
title: Mermaid Diagrams
category: Python
dateCreated: 2024-11-19
type: Notes
tags: [mermaid, diagrams, python]
outline: deep
---

# Mermaid Diagrams

## Overview
Mermaid is a simple markdown-like scripting language that generates diagrams such as flowcharts, sequence diagrams, Gantt charts, and more. It’s widely used in documentation tools like Markdown and MkDocs.

---

## Why Use Mermaid?
1. **Readable**: Easy-to-understand syntax.
2. **Dynamic**: Quick to edit and regenerate.
3. **Integrated**: Works in many documentation tools.
4. **Versatile**: Supports various diagram types.

---

## Basic Syntax
1. Start with the `mermaid` code block.
2. Specify the diagram type as the first line.
3. Add the nodes and relationships according to the type.

### Example:
```mermaid
graph TD
A[Start] --> B[Process]
B --> C[Decision]
C -->|Yes| D[End]
C -->|No| E[Retry]
```

---

## Diagram Types

### 1. Flowcharts
Flowcharts represent processes and decisions.

#### Syntax:
```mermaid
graph LR  // Direction: LR (Left to Right), TD (Top to Down)
A[Start] --> B[Decision]
B -->|Yes| C[End]
B -->|No| D[Retry]
```

#### Example Output:
```
Start → Decision → Yes → End
                   → No → Retry
```

---

### 2. Sequence Diagrams
Sequence diagrams show interactions between components.

#### Syntax:
```mermaid
sequenceDiagram
participant User
participant Server
User->>Server: Request
Server-->>User: Response
```

---

### 3. Gantt Charts
Gantt charts visualize project timelines and task dependencies.

#### Syntax:
```mermaid
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Planning
    Task A :done, a1, 2024-11-01, 2024-11-05
    Task B :active, a2, 2024-11-06, 2024-11-10
    section Execution
    Task C : a3, 2024-11-11, 2024-11-20
```

---

### 4. Class Diagrams
Class diagrams represent object-oriented structures.

#### Syntax:
```mermaid
classDiagram
class Vehicle {
  +int wheels
  +start()
  +stop()
}
class Car {
  +int doors
  +honk()
}
Vehicle <|-- Car
```

---

### 5. Pie Charts
Pie charts represent proportional data.

#### Syntax:
```mermaid
pie
    title Language Usage
    "Python" : 45
    "JavaScript" : 35
    "Others" : 20
```

---

### 6. Entity-Relationship Diagrams
Used to model database relationships.

#### Syntax:
```mermaid
erDiagram
    CUSTOMER {
        string name
        string email
    }
    ORDER {
        int order_id
        date order_date
    }
    CUSTOMER ||--o{ ORDER : places
```

---

## Common Features

### Styling Nodes
1. Add styles to nodes using the `style` keyword.
2. Syntax:
   ```mermaid
   style node_id fill:#color,stroke:#color,stroke-width:value;
   ```

Example:
```mermaid
graph TD
A[Start] --> B[Process]
style A fill:#f9f,stroke:#333,stroke-width:4px
```

---

### Links
1. Add clickable links to nodes.
2. Syntax:
   ```mermaid
   graph TD
   A[Node Text] --> B
   click A "https://example.com"
   ```

---

### Subgraphs
Group nodes into subgraphs for better organization.

#### Syntax:
```mermaid
graph TD
subgraph Cluster 1
    A
    B
end
subgraph Cluster 2
    C
    D
end
A --> C
```

---

## Tools Supporting Mermaid
1. **MkDocs**: Integrates Mermaid diagrams into documentation.
2. **VSCode**: Provides live preview extensions for Mermaid.
3. **Obsidian**: Supports Mermaid in Markdown notes.

---

## Summary
1. Mermaid makes it easy to create professional diagrams using a simple scripting language.
2. Supported diagram types include flowcharts, sequence diagrams, Gantt charts, and more.
3. Integrate Mermaid diagrams into your documentation workflow for clear and visual explanations.
