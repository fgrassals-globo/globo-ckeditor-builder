// main.js

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic';
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import CKFinderUploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";

const editor = ClassicEditor["ClassicEditor"];

editor.builtinPlugins = [
    Essentials, Autoformat, Bold, Italic, BlockQuote, Heading, Link, List, Paragraph, Indent,
    CKFinder, CKFinderUploadAdapter, CloudServices, EasyImage, Image, ImageCaption, ImageStyle,
    ImageToolbar, ImageUpload, MediaEmbed, PasteFromOffice, Table, TableToolbar, TextTransformation,
];


editor.defaultConfig = {
    toolbar: {
        items: [
            "heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "|", "outdent", "indent", "|",
            "uploadImage", "blockQuote", "insertTable", "mediaEmbed", "undo", "redo",
        ],
    },
    image: {
        toolbar: ["imageStyle:full", "imageStyle:side", "|", "imageTextAlternative"],
    },
    table: {
        contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
    language: 'en'
};

(function() {
    window.ClassicEditor = editor;
})();
