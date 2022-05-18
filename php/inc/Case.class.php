<?php

class Case {
    private $title;
    private $description;
    private $caseID;
    private $videos[];
    private static $caseNum = 0;

    public function __construct($title, $description) {
        $this->title = $title;
        $this->description = $description;
        $this->caseID = ++self::$caseNum;
    }
    
    public function getTitle() {
        return $this->title;
    }

    public function getDescription() {
        return $this->description;
    }

    public function getID() {
        return $this->caseID;
    }
}

?>