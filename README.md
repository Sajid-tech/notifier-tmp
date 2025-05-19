# @sajid-tech/notifier

A beautiful, customizable toast notification library for React applications.

## Features

- 🎨 Beautiful out-of-the-box design
- 🌓 Light & Dark mode support
- 🔄 Multiple positions (top-left, top-right, bottom-left, bottom-right, etc.)
- 🎭 Different types (success, error, warning, info)
- ⌛ Custom durations
- 🚀 Simple API
- 🧩 TypeScript support
- 📦 Lightweight (~4KB gzipped)

## Installation

```bash
npm install @sajid-tech/notifier
# or
yarn add @sajid-tech/notifier
# or
pnpm add @sajid-tech/notifier
```

## Quick Start

```tsx
import { notifier } from '@sajid-tech/notifier';
import '@sajid-tech/notifier/styles.css';

function App() {
  const showToast = () => {
    notifier.success('Operation completed successfully!');
  };

  return (
    <button onClick={showToast}>
      Show Notification
    </button>
  );
}
```

## API

### Basic Usage

```tsx
notifier.success('Success message');
notifier.error('Error message');
notifier.warning('Warning message');
notifier.info('Info message');
```

### Configuration

```tsx
notifier.configure({
  position: 'top-right',
  duration: 3000,
  maxNotifications: 3
});
```

### Custom Options

```tsx
notifier.show('Custom message', 'success', {
  duration: 5000,
  closable: true,
  className: 'my-custom-toast'
});
```

### Available Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| position | string | 'top-right' | Toast position ('top-right', 'top-left', 'bottom-right', 'bottom-left') |
| duration | number | 3000 | Duration in milliseconds |
| maxNotifications | number | 3 | Maximum number of toasts shown at once |
| closable | boolean | true | Whether to show close button |
| className | string | undefined | Additional CSS class names |

## TypeScript Support

This library includes TypeScript definitions out of the box.

## Browser Support

- Chrome (and Chromium based browsers) latest 2 versions
- Firefox latest 2 versions
- Safari latest 2 versions
- Edge latest 2 versions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Sajid Hussain](https://github.com/Sajid-tech)