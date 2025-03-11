<?php
header('Content-Type: application/json');
$db = new SQLite3('db.sqlite');

switch ($_GET['action']) {
    case 'submit_question':
        $stmt = $db->prepare('INSERT INTO questions (question, status) VALUES (:q, "pending")');
        $stmt->bindValue(':q', $_POST['question']);
        $stmt->execute();
        echo json_encode(['message' => 'Question submitted!']);
        break;
    // Add more actions: upload_book, approve_question, etc.
}
?>