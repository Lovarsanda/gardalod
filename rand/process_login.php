<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // استقبال البيانات المرسلة من النموذج
  $username = $_POST["username"];
  $password = $_POST["password"];
  
  // تحقق هنا من اسم المستخدم وكلمة المرور وقم بالإجراءات المناسبة
  // يمكنك تخزينها في ملف نصي أو قاعدة بيانات أو أي عملية أخرى
  
  // مثال بسيط: تخزين بيانات المستخدم في ملف نصي
  $file = fopen("data.txt", "a");
  fwrite($file, "اسم المستخدم: " . $username . ", كلمة المرور: " . $password . "\n");
  fclose($file);
  
  // إرسال استجابة بنجاح
  http_response_code(200);
  echo "تم تسجيل الدخول بنجاح!";
} else {
  // في حالة عدم وجود طلب POST، إرسال رمز استجابة غير مسموح
  http_response_code(405);
  echo "طريقة الطلب غير مدعومة!";
}
?>
