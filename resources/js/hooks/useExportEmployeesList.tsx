import React from 'react';

export const handleExport = (
    e: React.FormEvent,
    url: string,
    formData: any
) => {
    e.preventDefault();

    const exportForm = document.createElement('form');
    exportForm.method = 'POST';
    exportForm.action = url;
    exportForm.style.display = 'none';

    // Add formData as hidden inputs
    Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== '' && value !== undefined) {
            if (Array.isArray(value) && value.length > 0) {
                // Send arrays with proper Laravel array notation
                value.forEach((item, index) => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = `${key}[${index}]`; // This creates gender[0], gender[1], etc.
                    input.value = String(item);
                    exportForm.appendChild(input);
                });
            } else if (!Array.isArray(value)) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = String(value);
                exportForm.appendChild(input);
            }
        }
    });

    // Add CSRF token
    const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute('content');
    if (csrfToken) {
        const csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = '_token';
        csrfInput.value = csrfToken;
        exportForm.appendChild(csrfInput);
    }

    document.body.appendChild(exportForm);
    exportForm.submit();
    document.body.removeChild(exportForm);
};
