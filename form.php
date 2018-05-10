<?php
	if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['subject']) && !empty($_POST['message'])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];

		$to = "zim1833@gmail.com";
		$template = '
					<html>
						<head>
							<title>'.$subject.'</title>
						</head>
                    <body>
                        <p>Имя: '.$name.'</p>                       
                        <p>Почта: '.$email.'</p>                        
                        <p>Сообщение: '.$message.'</p>                        
                    </body>
					</html>';
		$headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Отправитель <from@example.com>\r\n";
		
		mail($to, $subject, $template, $headers);
		
		echo 'success';
	}
?>