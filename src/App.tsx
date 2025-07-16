import { Editor } from '@tinymce/tinymce-react';

export default function App() {

  return (
    <Editor
      licenseKey="gpl"
      tinymceScriptSrc='tinymce/js/tinymce/tinymce.min.js'

      init={{
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table help wordcount'
        ].join(' '),
        toolbar:
          'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | code',
        branding: false,
        height: 300,
        skin_url: 'tinymce/js/tinymce/skins/ui/oxide',
        content_css: 'tinymce/js/tinymce/skins/content/default/content.css',
      }}
    />
  );
}
